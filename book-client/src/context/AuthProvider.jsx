import React, { Children, createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



export const AuthProvider = ({children}) => {

    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(false);

   //  Signup method : create new user
     const createUser = (email, password) => {
      setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
     }

   //   Login method
   const login = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
   }

   // logout method
   const logout = () => {
      return signOut(auth)
   }

   //   login with google account
   const loginWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider)
   }


     useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser);
         setLoading(false)
      });
      return () => {
         return unsubscribe();
      }
     }, [])

     const authInfo = {
        user,
        createUser,
        loginWithGoogle,
        login,
        logout,
        loading
     }

  return (
    <AuthContext.Provider value={authInfo}>
          {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider