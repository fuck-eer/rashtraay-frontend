import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyCfUKoVzI6fKuAPwJqWqdXGa5GcHS4b0BY",
    authDomain: "burgerbuilder-ad3a4.firebaseapp.com",
    databaseURL: "https://burgerbuilder-ad3a4.firebaseio.com",
    projectId: "burgerbuilder-ad3a4",
    storageBucket: "burgerbuilder-ad3a4.appspot.com",
    messagingSenderId: "47762972526",
    appId: "1:47762972526:web:fe64d573f9038f00566b7f",
    measurementId: "G-F86DPJ65JG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage()

// refrence 

//firebase bucket
const storageRef=storage.ref();

//Scripts folder 
const scriptsRef=storageRef.child('SCRIPTS');


  
export  {
    storage,scriptsRef,storageRef, firebase as default
  }
 
 