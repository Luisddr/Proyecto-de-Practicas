import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhJLLRFWCnLIc9Dxd5oW7hFM4OMlLWOcw",
  authDomain: "clothing-shop-db-5ec59.firebaseapp.com",
  projectId: "clothing-shop-db-5ec59",
  storageBucket: "clothing-shop-db-5ec59.appspot.com",
  messagingSenderId: "867434060173",
  appId: "1:867434060173:web:d7a3d4676565244e66c5c4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocReference = doc(db, "users", userAuth.uid);

  // console.log(userDocReference);

  const userSnapShot = await getDoc(userDocReference);

  // console.log(userSnapShot)

  //verify if user snapshot exists in db

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocReference, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  return userDocReference;
};


export const createAuthUserWithEmailAndPassword = async (email, password)=>{
  if(!email || !password)return
 await createUserWithEmailAndPassword(auth, email, password)
}