import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADMpI2Js5J3CZioVaU5W746lxoEQw9qQo",
  authDomain: "challenge-840df.firebaseapp.com",
  projectId: "challenge-840df",
  storageBucket: "challenge-840df.appspot.com",
  messagingSenderId: "420973239831",
  appId: "1:420973239831:web:277f076eea2320ef36c652",
  measurementId: "G-4M67EBRPKE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
