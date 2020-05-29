import * as firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const config2 = {
  apiKey: process.env.REACT_APP_FIREBASE2_KEY,
  authDomain: process.env.REACT_APP_FIREBASE2_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE2_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE2_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE2_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE2_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE2_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE2_MEASUREMENT_ID,
};

export const app = firebase.initializeApp(config, "primary");
export const app2 = firebase.initializeApp(config2, "secondary");