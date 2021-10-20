import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthontication from "../firebase/firebase.init";

initializeAuthontication();
const useFirebase = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState({});
    const [error, setError] = useState('');
    const [isLoding, setIsLoging] = useState(true);

    const auth = getAuth();

    // email registation 

    const handelNameChange = e => {
        setName(e.target.value)

    }
    const handelEmailChange = e => {
        setEmail(e.target.value)

    }
    const handelPasswordChange = e => {
        setPassword(e.target.value)

    }
    const handelRegistation = e => {
        e.preventDefault();
        setError('')
        console.log(name, email, password)
        if (password.length < 6) {
            setError(' Password should be at least 6 characters')
            return
        }
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // email registation end

    const signInWithGoogle = () => {
        setIsLoging(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)


    }
    const signInWithgmail = () => {

        // setIsLoging(true)
        // return createUserWithEmailAndPassword(auth, email, password)

        setError('')
        console.log(name, email, password)
        if (password.length < 6) {
            setError(' Password should be at least 6 characters')
            return
        }
        return signInWithEmailAndPassword(auth, email, password)



    }
    const handelarSignInWithEmailAndPassword = (e) => {
        // e.preventDefault()
        setIsLoging(true)
        if (password.length < 6) {
            setError(' Password should be at least 6 characters')
            return
        }

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        localStorage.removeItem('user')
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
        })

    }, []);
    return {
        users,
        password,
        error,
        setError,
        isLoding,
        signInWithGoogle,
        signInWithgmail,
        logOut,
        unsubscripte,
        setIsLoging,
        handelNameChange,
        handelEmailChange,
        handelPasswordChange,
        handelRegistation,
        handelarSignInWithEmailAndPassword,
    }
}

export default useFirebase;