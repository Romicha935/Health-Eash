// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtdqwqmxfWDM3P0NbGyLbWoJe5vcxGi80",
  authDomain: "health-ease-f2da9.firebaseapp.com",
  projectId: "health-ease-f2da9",
  storageBucket: "health-ease-f2da9.firebasestorage.app",
  messagingSenderId: "680776363340",
  appId: "1:680776363340:web:30d07a9b2346b64572f3e9",
  measurementId: "G-MN6GPVMM3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();