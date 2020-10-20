import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAEzwHSOykxVINp5tC1j0pARe9TD0bajVQ",
    authDomain: "nai-chat-clone.firebaseapp.com",
    databaseURL: "https://nai-chat-clone.firebaseio.com",
    projectId: "nai-chat-clone",
    storageBucket: "nai-chat-clone.appspot.com",
    messagingSenderId: "608941701037",
    appId: "1:608941701037:web:133eba3272e4707c3b5324",
    measurementId: "G-H7V3KT60Q9"
});

var db = firebaseApp.firestore();
export default db;