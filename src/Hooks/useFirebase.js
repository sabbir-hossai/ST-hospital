import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthontication from "../firebase/firebase.init";

initializeAuthontication();
const useFirebase = () => {
    const [users, setUsers] = useState({});
    const [error, setError] = useState('');
    const [isLoding, setIsLoging] = useState(true);

    const auth = getAuth();

    const signInWithGoogle = () => {
        setIsLoging(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)


    }
    const logOut = () => {
        setIsLoging(true)
        signOut(auth)
            .then(() => {
                setUsers({})
            }).catch(error => {
                setError(error.messeage)
            })
            .finally(() => {
                setIsLoging(false)
            })
    }
    const unsubscripte = useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user)
            } else {
                setUsers({})
            }
            setIsLoging(false)
        });

    }, [])
    return {
        users,
        error,
        isLoding,
        signInWithGoogle,
        logOut,
        unsubscripte
    }
}

export default useFirebase;
