import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from "firebase/firestore";

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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectstoAdd
) => {
  const batch = writeBatch(db);
  const collectionReference = collection(db, collectionKey);

  objectstoAdd.forEach((object)=>{
    const docReference = doc(collectionReference, object.title.toLowerCase())
    batch.set(docReference, object)
  });

  await batch.commit();
  console.log('done')
};

export const getCategoriesAndDocuments = async()=>{
  const collectionRef = collection(db, 'categories');

  const q = query(collectionRef)

  const querySnapShot = await getDocs(q);
  
  //destructure data

  const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot)=>{
    const {title, items} = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;

  },{});
  return categoryMap
}

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
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
        ...additionalInfo,
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  return userDocReference;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutCurrentUser = async () => await signOut(auth);

export const stateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
