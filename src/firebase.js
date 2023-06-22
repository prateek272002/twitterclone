// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZI0Te9lhCw_XKfxzKPdUKyaeubo00TI0",
  authDomain: "twitterclone-1633d.firebaseapp.com",
  projectId: "twitterclone-1633d",
  storageBucket: "twitterclone-1633d.appspot.com",
  messagingSenderId: "186098702836",
  appId: "1:186098702836:web:0a6862212b9d347ce081a1",
  measurementId: "G-DQES6NJ7P5"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
export default db;