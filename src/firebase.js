import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAE-IP82F3RLEWkigZrxwaxfcmM05uQUv8",
  authDomain: "whats-app-clone-794a6.firebaseapp.com",
  projectId: "whats-app-clone-794a6",
  storageBucket: "whats-app-clone-794a6.appspot.com",
  messagingSenderId: "943541876138",
  appId: "1:943541876138:web:271cd4c28beeff0567a7d3",
  measurementId: "G-Y39DZG2R21"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;