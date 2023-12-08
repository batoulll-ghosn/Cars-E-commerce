// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCDAbBcdflv35Tcs_x1N5EUvFo7N6FfXH8",
    authDomain: "cars-508b0.firebaseapp.com",
    projectId: "cars-508b0",
    storageBucket: "cars-508b0.appspot.com",
    messagingSenderId: "945270534480",
    appId: "1:945270534480:web:1d77b7a0f06b03fa723c55",
    measurementId: "G-W3N6KKW8Q0",
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);