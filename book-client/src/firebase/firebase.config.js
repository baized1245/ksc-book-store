// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGQlqqFkmXhKaRQfh9bbEcPOWXHBKF7qc",
  authDomain: "mern-book-store-1028f.firebaseapp.com",
  projectId: "mern-book-store-1028f",
  storageBucket: "mern-book-store-1028f.appspot.com",
  messagingSenderId: "1054422396123",
  appId: "1:1054422396123:web:44944977827c73e29b30fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;