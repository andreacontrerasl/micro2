import firebase from 'firebase/app';

import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCmYN4LcWK5ctrVoUeMWCdBI6AP6jGshAQ",
    authDomain: "microproyecto2-51f17.firebaseapp.com",
    projectId: "microproyecto2-51f17",
    storageBucket: "microproyecto2-51f17.appspot.com",
    messagingSenderId: "53633256047",
    appId: "1:53633256047:web:c7eab293dd295da6b25b9a",
    measurementId: "G-49C679Y67K"
  };

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();

export const auth = app.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();