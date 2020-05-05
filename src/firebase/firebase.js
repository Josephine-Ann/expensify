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

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })
// // database.ref('expenses').push({
// //     description: 'Rent',
// //     note: '',
// //     amount: 144500,
// //     createdAt: 976123498763
// // })


//  database.ref('expenses').push({
//      description: 'wine',
//      note: '',
//      amount: 104400,
//      createdAt: 976123498763
//  })


// // database.ref('expenses').push({
// //     description: 'Realness',
// //     note: '',
// //     amount: 109500,
// //     createdAt: 976123498763
// // })

// // database.ref('expenses')
// // .once('value')
// // .then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         })
// //     })
// // })

// //  database.ref('expenses').on('value', (snapshot) => {
// //         const expenses = [];
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //         console.log(expenses)
// // });


// // const notes = [{
// //     id: '12',
// //     title: 'First note!',
// //     body: 'This is my note'
// // }, {
// //     id: '761ase',
// //     title: 'Another note!',
// //     body: 'This is my note'
// // }]

// // database.ref('notes').push({
// //     title: 'To do',
// //     body: 'go for a run'
// // });
 
// //    database.ref('expenses').push({
// //        description: 'Rent',
// //        note: '',
// //        amount: 109500,
// //        createdAt: 976123498763
// //    })


// // database.ref().set({
// //          name: 'Andrew Mead',
// //          age: 26,
// //          stressLevel: 6,
// //          job: {
// //              title: 'Software developer',
// //              company: 'Google'
// //          },
// //          location: {
// //              city: 'Philadelphia',
// //              country: 'United States'
// //          }
// //      }).then(() => {
// //          console.log('Data is saved!');
// //      }).catch((e) => {
// //          console.log('This failed', e)
// //      })
    




// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// // })
// // database.ref('location/city')
// // .once('value')
// // .then((snapshot) => {
// // const val = snapshot.val();
// // console.log(val);
// // }).catch((e) => {
// //     console.log('Error fetching data', e)
// // })

// // 
// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// //  })


// // single.remove()
// //   .then(() => {
// //     console.log("Remove succeeded.")
// //   })
// //   .catch(function(error) {
// //     console.log("Remove failed: " + error.message)