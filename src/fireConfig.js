// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8B4YQo_TGDzMSAgWmxCfJmwpGXTbDcPo",
  authDomain: "chat-app-5d960.firebaseapp.com",
  databaseURL: "https://chat-app-5d960-default-rtdb.firebaseio.com",
  projectId: "chat-app-5d960",
  storageBucket: "chat-app-5d960.appspot.com",
  messagingSenderId: "828663496606",
  appId: "1:828663496606:web:ab8d1a4fe8b7c810e3e08f",
  measurementId: "G-5RNVQSVK4Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); // main app config
export const auth = getAuth()//authentication (register)
export const storage = getStorage() //file storage
export const db = getFirestore() //database


  