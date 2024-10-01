// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import  'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL50bENWrv7HqRkyPj4lLYejr_Yme1H28",
  authDomain: "fir-auth-3ff90.firebaseapp.com",
  projectId: "fir-auth-3ff90",
  storageBucket: "fir-auth-3ff90.appspot.com",
  messagingSenderId: "324880848501",
  appId: "1:324880848501:web:e6d7d284b78d12db16ca3c"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

const auth=firebase.auth();
export {auth};