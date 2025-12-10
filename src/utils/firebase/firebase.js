import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOCFr09KpgrzkKtH_Sv-5VS6_guaWDoes",
    authDomain: "crwn-clothing-db-a729a.firebaseapp.com",
    projectId: "crwn-clothing-db-a729a",
    storageBucket: "crwn-clothing-db-a729a.appspot.com",
    messagingSenderId: "248882184226",
    appId: "1:248882184226:web:62377c02906c4f8e1dca7b"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);


const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});



export const auth = getAuth(firebaseapp);
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userDocRef);
    console.log(userSnapshot.exists());


    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createAt, ...additionalInformation })
        } catch (error) {
            console.log('error creating the user', error.message);

        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}


export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}


export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)