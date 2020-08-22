import { initializeApp } from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDGMZpIiDLHXLKJ5pZyIK7roXMv72HMm2A",
  authDomain: "kustovi-test-8b4bd.firebaseapp.com",
  databaseURL: "https://kustovi-test-8b4bd.firebaseio.com",
  projectId: "kustovi-test-8b4bd",
  storageBucket: "kustovi-test-8b4bd.appspot.com",
  messagingSenderId: "854716839161",
  appId: "1:854716839161:web:f4a72f65ce6cffb6749e28",
  measurementId: "G-HL5X4MPP55"
};

export const db = initializeApp(config).firestore();
export const usersCollection = db.collection("users");
