import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyAwgM2C0oAHiATemX8o-iNVx4jGQ350viY",
    authDomain: "crown-db-67c7b.firebaseapp.com",
    databaseURL: "https://crown-db-67c7b.firebaseio.com",
    projectId: "crown-db-67c7b",
    storageBucket: "crown-db-67c7b.appspot.com",
    messagingSenderId: "201237557398",
    appId: "1:201237557398:web:cc04f06f1f2986883412b7",
    measurementId: "G-W8L6JMQQZT"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;