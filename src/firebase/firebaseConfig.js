import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCDDKqJ7GW4Xy7JfVehX4cYOyMu4_1sYO4",
  authDomain: "netflix-clone-1d3a2.firebaseapp.com",
  projectId: "netflix-clone-1d3a2",
  storageBucket: "netflix-clone-1d3a2.appspot.com",
  messagingSenderId: "786631608991",
  appId: "1:786631608991:web:c5d7d91764bc1015b170aa",
  measurementId: "G-M0GJF84361",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
