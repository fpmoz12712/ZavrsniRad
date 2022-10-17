import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyBOVKoR5zhAzgYVQYfb1esgaZtiF1Xg8hc",
  authDomain: "katalog-fb183.firebaseapp.com",
  projectId: "katalog-fb183",
  storageBucket: "katalog-fb183.appspot.com",
  messagingSenderId: "29685777235",
  appId: "1:29685777235:web:9859b2a53ea1c815b5d7a6"
};

// Initialize Firebase
firebase.initializeApp(config);

const db = firebase.firestore();

export const dbPhoneRef = db.collection("phoneNumbers");
export const dbProizvodiRef = db.collection("proizvodi");

export const firebaseAuth = firebase.auth();

export const firebaseStorage = firebase.storage();
