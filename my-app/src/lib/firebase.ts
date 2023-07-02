// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUC86yi-LnZkXYCi8DbPq5ZSWUozljKyk",
  authDomain: "rental-car-2319a.firebaseapp.com",
  databaseURL: "https://rental-car-2319a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rental-car-2319a",
  storageBucket: "rental-car-2319a.appspot.com",
  messagingSenderId: "75327375880",
  appId: "1:75327375880:web:8d7c4578a5d9e013511fbd",
  measurementId: "G-CF5G51937Z"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const provider =new GoogleAuthProvider();
export {auth,provider} ;