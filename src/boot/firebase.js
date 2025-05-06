import { initializeApp } from "firebase/app";

import {
  browserLocalPersistence,
  initializeAuth,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN1Laav7JfipyeAHoaY-V-xoQvcdWFH3c",
  authDomain: "orange-e70bf.firebaseapp.com",
  projectId: "orange-e70bf",
  storageBucket: "orange-e70bf.appspot.com",
  messagingSenderId: "883914707521",
  appId: "1:883914707521:web:900bc36008271d054dacc0",
  measurementId: "G-JP52QPPMS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: browserLocalPersistence,
});
const firestore = getFirestore(app);
const functions = getFunctions(app);
const storage = getStorage(app);
const db = getFirestore(app);
export { firestore, auth, functions, storage, db }