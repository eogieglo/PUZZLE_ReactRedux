import firebase from 'firebase/app'
import 'firebase/auth'

 // Web app's Firebase configuration

 let firebaseConfig = {
    apiKey: "AIzaSyCD1dUYOtaN9CcMYRm-lS23YK0VW1dEYJA",
    authDomain: "puzzle-reactredux.firebaseapp.com",
    databaseURL: "https://puzzle-reactredux.firebaseio.com",
    projectId: "puzzle-reactredux",
    storageBucket: "puzzle-reactredux.appspot.com",
    messagingSenderId: "890062175533",
    appId: "1:890062175533:web:df4426871ede30042467a4",
    measurementId: "G-26ZWHLGJJL"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export function loginWithGoogle(){
      let provider =  new firebase.auth.GoogleAuthProvider() 
      firebase.auth().signInWithPopup(provider)
      .then(snap => snap.user)
  }