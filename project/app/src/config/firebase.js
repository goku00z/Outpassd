import * as firebase from "firebase";

import "firebase/auth";

import { firebaseConfig } from "../config/keys";
var app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(app);

const databaseRef = firebase.database().ref();
export default db;