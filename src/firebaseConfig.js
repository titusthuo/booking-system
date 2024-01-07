// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcc1NBO4EZdsFJM-wm1t3Ym-ejKbSzMHo",
  authDomain: "house-booking-system.firebaseapp.com",
  projectId: "house-booking-system",
  storageBucket: "house-booking-system.appspot.com",
  messagingSenderId: "770493454718",
  appId: "1:770493454718:web:3ce53ae2e0c9677cbe3b2f",
  measurementId: "G-E5FGL80231"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const firebaseConfigModule = {
  app,
  analytics,
  auth,
};

export default firebaseConfigModule;