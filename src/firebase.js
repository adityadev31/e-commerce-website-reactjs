import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBkO2WyUCSdu5a3YfS3XLDyCvrJns4YG60",
  authDomain: "project-74cb8.firebaseapp.com",
  projectId: "project-74cb8",
  storageBucket: "project-74cb8.appspot.com",
  messagingSenderId: "877752746554",
  appId: "1:877752746554:web:04aeb7d7c639e05dbb6b03",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
