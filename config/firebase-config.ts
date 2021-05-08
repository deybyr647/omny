import firebase from "firebase";

const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

try {
    firebase.initializeApp(config);
} catch(err){
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)}
}

const fire = firebase;
export default fire;