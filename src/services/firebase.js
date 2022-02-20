// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmOwX4JNiQzDPqSUFNDYit6b3fmTGdKBE",
    authDomain: "formulario2022-fb218.firebaseapp.com",
    projectId: "formulario2022-fb218",
    storageBucket: "formulario2022-fb218.appspot.com",
    messagingSenderId: "361081816687",
    appId: "1:361081816687:web:09bb52f08a24a0bb9e2f9a",
    measurementId: "G-P5RP3N4M2S"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth();

