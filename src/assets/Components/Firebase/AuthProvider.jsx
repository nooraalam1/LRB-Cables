import { createContext,  useEffect,  useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {app} from '../Firebase/firebase.config'

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    //Sign In
    const createUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    //Registration
    const registration=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //logout
    const logout=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const Info={
        user,
        createUser,
        registration,
        logout,
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,user=>{
        setUser(user)
        setLoading(false)
    })
    return ()=>{
        return unsubscribe;
    }
    },[])

    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;