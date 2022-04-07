import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig ={
    apiKey: "AIzaSyC5NZ7p-MuVbkC9P40fnR4CPB6qIY7IW38",
    authDomain: "image-community-76a10.firebaseapp.com",
    projectId: "image-community-76a10",
    storageBucket: "image-community-76a10.appspot.com",
    messagingSenderId: "142730311353",
    appId: "1:142730311353:web:b9e17188e8d78b7fd64d68",
    measurementId: "G-G9J8QDE30R"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export{auth, apiKey, firestore, storage};