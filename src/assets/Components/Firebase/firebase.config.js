// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF_EY5AwA1qp782Yu6GOzPbJZBtS-j-qI",
  authDomain: "noor-s-nourishment.firebaseapp.com",
  projectId: "noor-s-nourishment",
  storageBucket: "noor-s-nourishment.firebasestorage.app",
  messagingSenderId: "6315267776",
  appId: "1:6315267776:web:eb5f8e25e88678c88cbf25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app