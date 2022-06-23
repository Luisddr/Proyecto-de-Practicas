import { initializeApp } from  'firebase/app';
import {
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider} from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhJLLRFWCnLIc9Dxd5oW7hFM4OMlLWOcw",
    authDomain: "clothing-shop-db-5ec59.firebaseapp.com",
    projectId: "clothing-shop-db-5ec59",
    storageBucket: "clothing-shop-db-5ec59.appspot.com",
    messagingSenderId: "867434060173",
    appId: "1:867434060173:web:d7a3d4676565244e66c5c4"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)