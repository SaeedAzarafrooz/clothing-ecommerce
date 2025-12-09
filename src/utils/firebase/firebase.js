import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'



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


const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});






export const auth = getAuth(firebaseapp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userDocRef);
    console.log(userSnapshot.exists());
    
    
if(!userSnapshot.exists()) {
    const {displayName,email}=userAuth;
    const createAt=new Date();

    try {
        await setDoc(userDocRef,{displayName,email,createAt})
    } catch (error) {
        console.log('error creating the user',error.message);
        
    }
}

return userDocRef;
}