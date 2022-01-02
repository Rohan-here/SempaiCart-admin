import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAWxa8kkfDdlqWmq4k324EqOooN2q1X8dA",
    authDomain: "sempaicart.firebaseapp.com",
    projectId: "sempaicart",
    storageBucket: "sempaicart.appspot.com",
    messagingSenderId: "760270278575",
    appId: "1:760270278575:web:a998673d9e8f6d18c9695a",
    measurementId: "G-9W7DN3KE7D"
};

const app = initializeApp(firebaseConfig);

export default app;