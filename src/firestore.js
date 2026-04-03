// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6_sAJ9Cn8MCcEO8aZ9uq9tPIdUFqWX8M",
  authDomain: "book-store-70001.firebaseapp.com",
  projectId: "book-store-70001",
  storageBucket: "book-store-70001.firebasestorage.app",
  messagingSenderId: "208038651783",
  appId: "1:208038651783:web:905826eff33e558213d522"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);