import firebase from 'firebase';
//Authentication
import "firebase/auth";

//firestore database
import 'firebase/database'

//real time database

//storage
import 'firebase/storage'

//function
import 'firebase/functions'
//hosting

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjKm2uplNvZwPlCoe1n5D1ezM8cUfb_kE",
  authDomain: "spotify-clone-94aaf.firebaseapp.com",
  projectId: "spotify-clone-94aaf",
  storageBucket: "spotify-clone-94aaf.appspot.com",
  messagingSenderId: "59056556560",
  appId: "1:59056556560:web:57577740ecc12242ab5895"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default firebase;