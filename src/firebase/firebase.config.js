// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfbQJztTsdI-Y7tSXXiqLYvtHcQ3V6uEo",
    authDomain: "e-learning-hub-bd.firebaseapp.com",
    projectId: "e-learning-hub-bd",
    storageBucket: "e-learning-hub-bd.appspot.com",
    messagingSenderId: "255547206493",
    appId: "1:255547206493:web:666be64cb7ab2626b5d6b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;