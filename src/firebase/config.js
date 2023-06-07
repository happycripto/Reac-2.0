// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// import { getAuth } from "firebase/Auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpnBc5Kua2q4uqqtkYHafKSQT239lMOuc",
    authDomain: "proyecto-mi-templo-spa.firebaseapp.com",
    projectId: "proyecto-mi-templo-spa",
    storageBucket: "proyecto-mi-templo-spa.appspot.com",
    messagingSenderId: "900667507639",
    appId: "1:900667507639:web:8ee960bcb314320cee9e32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// export const auth = getAuth(app)

