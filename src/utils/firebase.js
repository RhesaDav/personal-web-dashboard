// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS8UKOV3_Qc0xBzlcE-2KJ4R0UGybZ5Ss",
  authDomain: "personal-blog-67a50.firebaseapp.com",
  projectId: "personal-blog-67a50",
  storageBucket: "personal-blog-67a50.appspot.com",
  messagingSenderId: "433028851862",
  appId: "1:433028851862:web:56d82714f8ec4c5c1abab7",
  measurementId: "G-9J6Z7QWCZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);