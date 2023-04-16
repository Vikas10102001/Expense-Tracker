// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkPtTeoLXtNgRU6nbY2lVgYJKTr-t1w0Q",
  authDomain: "expense-tracker-acd77.firebaseapp.com",
  databaseURL: "https://expense-tracker-acd77-default-rtdb.firebaseio.com",
  projectId: "expense-tracker-acd77",
  storageBucket: "expense-tracker-acd77.appspot.com",
  messagingSenderId: "182777440794",
  appId: "1:182777440794:web:75cc728115f0aa91937fa3",
  measurementId: "G-G190LZFWR5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
