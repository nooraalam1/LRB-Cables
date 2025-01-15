import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.config"; 

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)
    
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,user=>{
        setUser(user)
        setLoading(false)
      })

      return ()=>{
        return unsubscribe();
      }
    },[])

    //create User
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword (auth,email,password)
    }

    //Login user
    const loginUser=(email,password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }
    
    const info={
        createUser,
        loginUser
    }
    return (
      <AuthContext.Provider value={info}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;