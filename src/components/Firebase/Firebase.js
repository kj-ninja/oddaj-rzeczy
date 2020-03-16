import * as firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGFehRTcE1j4YDelRCdfDZD2KEtRkWiPI",
    authDomain: "oddaj-rzeczy-206b3.firebaseapp.com",
    projectId: "oddaj-rzeczy-206b3"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {fire, db};