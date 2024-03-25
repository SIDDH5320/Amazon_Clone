import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABDP6Pu4hi-_Zb6J_DTuAKEUTMOAgAx7I",
  authDomain: "challenge-beee1.firebaseapp.com",
  projectId: "challenge-beee1",
  storageBucket: "challenge-beee1.appspot.com",
  messagingSenderId: "237357020891",
  appId: "1:237357020891:web:dc6c1ae2592b6e1ccf7efe",
  measurementId: "G-7MPP5FBS1G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
