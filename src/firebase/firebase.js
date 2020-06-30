import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "convey-9298b.firebaseapp.com",
    databaseURL: "https://convey-9298b.firebaseio.com",
    projectId: "convey-9298b",
    storageBucket: "convey-9298b.appspot.com",
    messagingSenderId: "974158346664",
    appId: "1:974158346664:web:4f0975fb7ed0cef4e7859d",
    measurementId: "G-0N81JWBRN3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  export {database as default, firebase, googleAuthProvider};