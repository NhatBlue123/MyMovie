// Config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import Firebase Auth
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAga3xyKO_ys4UId0MjYLmeX7hvG4cmakE",
  authDomain: "movieapp-f7e31.firebaseapp.com",
  projectId: "movieapp-f7e31",
  storageBucket: "movieapp-f7e31.appspot.com",
  messagingSenderId: "808806047958",
  appId: "1:808806047958:web:600489c1a9768959d6a977",
  measurementId: "G-NWZWTG9HD0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
const analytics = getAnalytics(app);
export const auth = getAuth(); // Initialize Firebase Auth

export default  app;
