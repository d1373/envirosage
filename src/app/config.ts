// config.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import Firebase Auth
import { getFirestore } from 'firebase/firestore'; // Import Firestore

// Firebase config (replace with your Firebase project settings)
const firebaseConfig = {
  apiKey: 'Your_Secret_key',
  authDomain: 'Your_ID.firebaseapp.com',
  projectId: 'Your_Project_ID',
  storageBucket: 'Your_Project_ID.firebasestorage.app',
  messagingSenderId: 'Sender_ID',
  appId: 'Your_app_ID',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

console.log('Firebase has been successfully initialized');

// To confirm if the auth is working properly
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('User is signed in:', user);
  } else {
    console.log('No user is signed in');
  }
});

export { app, auth, db };
