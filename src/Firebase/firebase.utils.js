import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const Config = {
  apiKey: "AIzaSyCXt-zJtsSK8WAxmb9bf3S-CC_xjXm0g04",
  authDomain: "flixtreina.firebaseapp.com",
  databaseURL: "https://flixtreina.firebaseio.com",
  projectId: "flixtreina",
  storageBucket: "",
  messagingSenderId: "180843287421",
  appId: "1:180843287421:web:017aa2c69873be70787214"
};

export const CreateUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log(`${error} User Can't be registered`);
    }
  }
  return userRef;
};

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
