import  firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const register = async (email: string, password: string) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export const login = async (email: string, password: string) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
}

export const logout = () => {
    return firebase.auth().signOut()
}

export const db = firebase.firestore();

export { firebase };

