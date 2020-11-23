import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCSs-OuVMrPPlo7aqJusbIPgA66FsywJVw",
    authDomain: "discord-clone-84016.firebaseapp.com",
    databaseURL: "https://discord-clone-84016.firebaseio.com",
    projectId: "discord-clone-84016",
    storageBucket: "discord-clone-84016.appspot.com",
    messagingSenderId: "613028618800",
    appId: "1:613028618800:web:c1bc1af4613c44947903f5",
    measurementId: "G-0MGYF41JXV"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

console.log(provider)

export { auth, provider };
export default db