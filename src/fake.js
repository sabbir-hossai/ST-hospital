

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




import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, } from "firebase/auth";
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
        console.log(name, email, password)
        return createUserWithEmailAndPassword(auth, email, password)
    }

}
// email registation end

const signInWithGoogle = () => {
    setIsLoging(true)
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)


}
const signInWithgmail = () => {
    e.preventDefault();
    setIsLoging(true)
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
    });

}, [])
return {
    users,
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
}
 }

export default useFirebase;

