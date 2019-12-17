import firebase from 'firebase'
import 'firebase/storage';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBxKuQLPbE_GLQJAU7nuakVn-qws1wyYmA",
    authDomain: "hakunamata-52f67.firebaseapp.com",
    databaseURL: "https//hakunamata-52f67.firebaseio.com",
    projectId: "hakunamata-52f67",
    storageBucket: "hakunamata-52f67.appspot.com",
    messagingSenderId: "99827900541",
    appId: "1:99827900541:web:bae0a569ba4aaa89949114",
    measurementId: "G-4980K5J8G4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
export{
  storage,firebase as default
}