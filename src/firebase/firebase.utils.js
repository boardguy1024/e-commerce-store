import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { async } from "q";

const config = {
  apiKey: "AIzaSyAWEua2_jBBrB--rtUP6ytOXXiflYpn6CM",
  authDomain: "e-commerce-store-db.firebaseapp.com",
  databaseURL: "https://e-commerce-store-db.firebaseio.com",
  projectId: "e-commerce-store-db",
  storageBucket: "",
  messagingSenderId: "645127158742",
  appId: "1:645127158742:web:c469b2f36130db8a9b4277",
  measurementId: "G-VD0MELTF85"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  //usersにカレントユーザーがない場合にはデータベースに追加
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
