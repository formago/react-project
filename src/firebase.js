import * as firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDxBc74V7zUEnVpRh_D4da_lsDhvZJkYSE",
    authDomain: "diary-formago.firebaseapp.com",
    databaseURL: "https://diary-formago.firebaseio.com",
    projectId: "diary-formago",
    storageBucket: "",
    messagingSenderId: "614428544328"
  };
firebase.initializeApp(config);

export const database = firebase.database().ref('/notes');

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();


