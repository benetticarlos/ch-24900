// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA4sf5vPcrT4Q5s6qM0WcFgdhQGHDIODJw',
  authDomain: 'paw-house.firebaseapp.com',
  projectId: 'paw-house',
  storageBucket: 'paw-house.appspot.com',
  messagingSenderId: '208386162997',
  appId: '1:208386162997:web:1f1620634bfe299d9e8c7c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)