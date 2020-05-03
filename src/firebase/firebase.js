import * as firebase from 'firebase';
// import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyCbUJMb6-lezz5N1rWmekGBUYlq64B80sQ",
    authDomain: "expensify-41233.firebaseapp.com",
    databaseURL: "https://expensify-41233.firebaseio.com",
    projectId: "expensify-41233",
    storageBucket: "expensify-41233.appspot.com",
    messagingSenderId: "70658746281",
    appId: "1:70658746281:web:b9396f77cf3dd541e906b8",
    measurementId: "G-GT1FK4RJJ2"
  };

firebase.initializeApp(firebaseConfig);

// firebase.database();

// firebase.database().ref().set({
//    age: 44
// })

// database.ref().set('This is my data');

firebase.database.ref('age').set(28);