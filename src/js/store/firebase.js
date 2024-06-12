import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBYWaZVpzlhHXjXKtMfnlOXRDHyX97bWJo",
  authDomain: "airbnb-e2967.firebaseapp.com",
  projectId: "airbnb-e2967",
  storageBucket: "airbnb-e2967.appspot.com",
  messagingSenderId: "262574983573",
  appId: "1:262574983573:web:31722d58a07267b3474e9c",
  measurementId: "G-EFCJDN1BXT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };