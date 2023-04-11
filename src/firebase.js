// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ5sFzzSAvtdgLAMRcFc_MknqmD4ME54E",
  authDomain: "quora-clone-11b2f.firebaseapp.com",
  projectId: "quora-clone-11b2f",
  storageBucket: "quora-clone-11b2f.appspot.com",
  messagingSenderId: "678812837775",
  appId: "1:678812837775:web:554dcdd246a387f0d50dfa",
  measurementId: "G-N2R3763G2Q"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);


export { auth, provider };
export default db;
