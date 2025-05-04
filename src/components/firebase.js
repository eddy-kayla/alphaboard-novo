// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAvZE3XH-IDW3aABL-qyMzPnHuIr50nuA",
  authDomain: "alphaboard-f7030.firebaseapp.com",
  projectId: "alphaboard-f7030",
  storageBucket: "alphaboard-f7030.appspot.com",
  messagingSenderId: "1065401324777",
  appId: "1:1065401324777:web:e38f9bcbad8c46e6ef8c78"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
