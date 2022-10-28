// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD7JqZAU5p6QlYy6aNqaaIJJ5PLxF9nHs8',
  authDomain: 'gingerstudio-firebase.firebaseapp.com',
  projectId: 'gingerstudio-firebase',
  storageBucket: 'gingerstudio-firebase.appspot.com',
  messagingSenderId: '859033648403',
  appId: '1:859033648403:web:1fef951cd990b6befc2ee6',
  measurementId: 'G-BFX5JLTZFZ',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);

const getTodos = async () => {
  console.log(db);
  const querySnapshot = await getDocs(collection(db, 'todos'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
};

export { db, getTodos };
