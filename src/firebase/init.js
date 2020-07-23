import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC5AeoBpY8WkZ-AlzeCZ3zatqWY2hmfhx8",
  authDomain: "indice-investment.firebaseapp.com",
  databaseURL: "https://indice-investment.firebaseio.com",
  projectId: "indice-investment",
  storageBucket: "indice-investment.appspot.com",
  messagingSenderId: "479884938033",
  appId: "1:479884938033:web:465dd6d7f54bba9e927e10",
  measurementId: "G-6GX4EMZCEJ"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();