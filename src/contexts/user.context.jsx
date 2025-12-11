import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase";

//actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});



export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser }

    useEffect(() => {

        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                //sign in with google if the user isn't exist in DB by this method create the new one
                createUserDocumentFromAuth(user);
                console.log('Observer:', user);

            }
            setCurrentUser(user)

        })
        return unsubscribe;
    }, [])


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}