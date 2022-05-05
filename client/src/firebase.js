//import Firebase

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

//web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTp0jq55fVcB9-zNiTsx0pVsTzN_FW8KE",
  authDomain: "e-commerce-chaitanya-makala.firebaseapp.com",
  projectId: "e-commerce-chaitanya-makala",
  storageBucket: "e-commerce-chaitanya-makala.appspot.com",
  messagingSenderId: "61718986892",
  appId: "1:61718986892:web:6072fb5a488d0d99bdbba9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
