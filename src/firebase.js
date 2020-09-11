import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAnqazqIhf9ptquma_WkdBhsJH2SFvJAUw",
  authDomain: "clone-e3b8f.firebaseapp.com",
  databaseURL: "https://clone-e3b8f.firebaseio.com",
  projectId: "clone-e3b8f",
  storageBucket: "clone-e3b8f.appspot.com",
  messagingSenderId: "405846014659",
  appId: "1:405846014659:web:fd67d84d2955410ada4076",
  measurementId: "G-NLCQKWS7R2"
});
// const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };