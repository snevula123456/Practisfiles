import firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCE-IlxVIXrnOQbro-_b6n4f66P1RNsLoI",
  authDomain: "login-38fe3.firebaseapp.com",
  databaseURL: "https://login-38fe3.firebaseio.com",
  projectId: "login-38fe3",
  storageBucket: "login-38fe3.appspot.com",
  messagingSenderId: "984980925706",
  appId: "1:984980925706:web:3dca708618bb21ba719ef3",
  measurementId: "G-DJBD9P4ZZL",
});

export const auth = app.auth();
export default app;
