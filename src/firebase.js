import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAGaS_SE1BxuZ7vc_gG3bmYP4rVOBGeYdo",
  authDomain: "clone-d32a7.firebaseapp.com",
  projectId: "clone-d32a7",
  storageBucket: "clone-d32a7.appspot.com",
  messagingSenderId: "719585947169",
  appId: "1:719585947169:web:511b20a196ff9db809bd60",
  measurementId: "G-QPYBGM8MPF",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
