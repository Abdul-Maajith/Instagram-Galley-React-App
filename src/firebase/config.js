import firebase from "firebase/app"
import "firebase/storage";
import 'firebase/firestore'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCcS4U-HX9hSSBA5hWRHP_J00DgM5pdtIM",
    authDomain: "firegram-a9648.firebaseapp.com",
    projectId: "firegram-a9648",
    storageBucket: "firegram-a9648.appspot.com",
    messagingSenderId: "944170593307",
    appId: "1:944170593307:web:9357451c74bf6dab96dcbe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

 export { projectStorage, projectFirestore, timestamp };