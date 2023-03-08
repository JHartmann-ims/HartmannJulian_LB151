// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXTgRTEaMg5_ukrNM-CDrHPUqBYh1nWXs",
  authDomain: "gluecksrad-m151.firebaseapp.com",
  projectId: "gluecksrad-m151",
  storageBucket: "gluecksrad-m151.appspot.com",
  messagingSenderId: "386874730242",
  appId: "1:386874730242:web:43f8926541685450e3041b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);