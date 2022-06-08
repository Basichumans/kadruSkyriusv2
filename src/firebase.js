const firebaseConfig = {
    apiKey: "AIzaSyAX2FZWG0Ik1knhxwMjQ0nulBCZxTOu3Qc",
    authDomain: "kadruskyrius-ccd38.firebaseapp.com",
    projectId: "kadruskyrius-ccd38",
    storageBucket: "kadruskyrius-ccd38.appspot.com",
    messagingSenderId: "1081755013362",
    appId: "1:1081755013362:web:b986e7bdd85394737d806b",
    measurementId: "G-DQNWN878MW"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = ffirebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage }
export default db;
