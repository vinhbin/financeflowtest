
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5MgO0GUkF8tTUSoTJmWF0hX9-n38JghA",
  authDomain: "finance-management-614ac.firebaseapp.com",
  projectId: "finance-management-614ac",
  storageBucket: "finance-management-614ac.appspot.com",
  messagingSenderId: "770894955485",
  appId: "1:770894955485:web:f38bd24c83946be66b6c34",
  measurementId: "G-NL62R2G9EJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
