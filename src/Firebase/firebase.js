import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyAO9NeKDFs0V7BJYoOT2G1FwAzBzNc8nq0",
    authDomain: "rashtraay-website.firebaseapp.com",
    databaseURL: "https://rashtraay-website.firebaseio.com",
    projectId: "rashtraay-website",
    storageBucket: "rashtraay-website.appspot.com",
    messagingSenderId: "941601999185",
    appId: "1:941601999185:web:98324521bd9e377c18eb70",
    measurementId: "G-MZJBTP26ZK"
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
 
 