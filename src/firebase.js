import firebase from 'firebase/app'
import 'firebase/auth'


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAgP79vrVrS5qkS1eVDcWyLZqMO0tyF-bI",
    authDomain: "puzzle-reactredux-c9d26.firebaseapp.com",
    databaseURL: "https://puzzle-reactredux-c9d26.firebaseio.com",
    projectId: "puzzle-reactredux-c9d26",
    storageBucket: "puzzle-reactredux-c9d26.appspot.com",
    messagingSenderId: "889282244237",
    appId: "1:889282244237:web:d7a8a002608690a8303cc4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  export function loginWithGoogle(){
      let provider =  new firebase.auth.GoogleAuthProvider() 
      return firebase.auth().signInWithPopup(provider)
      .then(snap => snap.user)
  }