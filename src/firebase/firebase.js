import * as firebase from 'firebase';

var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();


export { firebase, googleAuthProvider, facebookAuthProvider, database as default };

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