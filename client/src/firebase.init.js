// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhhYA6QUGbyx_H6ZbmyRWk9dyXGGZiTPI",
  authDomain: "learnpr-69acf.firebaseapp.com",
  projectId: "learnpr-69acf",
  storageBucket: "learnpr-69acf.appspot.com",
  messagingSenderId: "114118649459",
  appId: "1:114118649459:web:f1234b4b836efe27d72c06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
