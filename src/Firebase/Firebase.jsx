// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0ZquVwcBNgxp77TIJkGJR_vabRaeGWYo",
  authDomain: "sopno-kunjo.firebaseapp.com",
  projectId: "sopno-kunjo",
  storageBucket: "sopno-kunjo.appspot.com",
  messagingSenderId: "38600499287",
  appId: "1:38600499287:web:c42ec748b5b419c183c312"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;