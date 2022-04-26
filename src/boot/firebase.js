import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyChWe18C1Y_1P2104AHLROnCkV0yNtNopY",
    authDomain: "note-app-268d5.firebaseapp.com",
    projectId: "note-app-268d5",
    storageBucket: "note-app-268d5.appspot.com",
    messagingSenderId: "529232738980",
    appId: "1:529232738980:web:b2e90337913a40b8860431",
    measurementId: "G-7TPDY3HD6X"
};

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore();
