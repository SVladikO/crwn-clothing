import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBA6a05pNPTFqYngUNYv2yNwY7vyDiz4vo",
    authDomain: "crwn-db-211aa.firebaseapp.com",
    databaseURL: "https://crwn-db-211aa.firebaseio.com",
    projectId: "crwn-db-211aa",
    storageBucket: "crwn-db-211aa.appspot.com",
    messagingSenderId: "408949026418",
    appId: "1:408949026418:web:c5147c2ef0ca578f36dceb",
    measurementId: "G-MQQN5XVR4F"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;