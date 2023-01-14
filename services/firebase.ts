import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: "db-portfolio-fb0e3",
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    name: "db-portfolio"
};

// Initialize Firebase
const appFirestore = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const dbFirestore = getFirestore(appFirestore);
