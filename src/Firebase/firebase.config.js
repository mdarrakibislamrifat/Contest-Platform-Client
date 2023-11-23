
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBESbWdMjm5jECzjw_gD7ilg3abaK9SkKQ",
  authDomain: "contest-platform-bce16.firebaseapp.com",
  projectId: "contest-platform-bce16",
  storageBucket: "contest-platform-bce16.appspot.com",
  messagingSenderId: "341337394387",
  appId: "1:341337394387:web:64e47065a697428a861826"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);