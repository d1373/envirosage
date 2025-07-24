// config.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import Firebase Auth
import { getFirestore } from 'firebase/firestore'; // Import Firestore

// Firebase config (replace with your Firebase project settings)
const firebaseConfig = {
  apiKey: 'AIzaSyChU2gfVwcDZ0sXunkPDWwb8ex_ZrGEMEQ',
  authDomain: 'envirosage-bda0c.firebaseapp.com',
  projectId: 'envirosage-bda0c',
  storageBucket: 'envirosage-bda0c.firebasestorage.app',
  messagingSenderId: '281254631132',
  appId: '1:281254631132:web:ab8cbbb9e7509bdbd64619',
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
