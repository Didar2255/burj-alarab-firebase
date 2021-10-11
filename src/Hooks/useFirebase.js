import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const googleProvider = new GoogleAuthProvider()
    const auth = getAuth()

    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)

            .catch(error => {
                setError(error.message)
            })
    }

    const googleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    const hendelForm = e => {
        e.preventDefault();
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {

            }
        })
    }, [])

    return { user, googleLogIn, hendelForm, googleSignOut, error }
}
export default useFirebase;
