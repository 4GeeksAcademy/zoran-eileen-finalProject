// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// if (process.env.NODE_ENV !== 'production') {
//     const dotenv = require('dotenv');
//     dotenv.config();
//   }
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_APIKEY, 
//   authDomain: process.env.FIREBASE_AUTHDOMAIN,
//   projectId: process.env.FIREBASE_PROJECTID,
//   storageBucket: process.env.FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
//   appId: process.env.FIREBASE_APPID,
//   measurementId: process.env.FIREBASE_MEASUREMENTID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBYWaZVpzlhHXjXKtMfnlOXRDHyX97bWJo",
  authDomain: "airbnb-e2967.firebaseapp.com",
  projectId: "airbnb-e2967",
  storageBucket: "airbnb-e2967.appspot.com",
  messagingSenderId: "262574983573",
  appId: "1:262574983573:web:31722d58a07267b3474e9c",
  measurementId: "G-EFCJDN1BXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };