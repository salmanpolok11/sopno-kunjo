import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";


export const Authcontext = createContext(null)

const AuthProvider = ({children}) => {
const googleProvider = new GoogleAuthProvider()

const [ user , setUser ] = useState('')

const googleLogin = () => {
     return signInWithPopup  ( auth ,  googleProvider)
  }

  const createUserLogin = ( email , password) => {
      return createUserWithEmailAndPassword( auth , email , password)
  }

  const userLogin = ( email , password ) =>{
     return signInWithEmailAndPassword( auth , email ,password)
  }

  useEffect( ()=>{
    const unSubscribe =  onAuthStateChanged( auth , currentUser => {
       setUser(currentUser)
      console.log("kaj hogea", currentUser);
    })
return () => {
unSubscribe()
}
},[setUser])

const logOut = () => {
   return signOut(auth)
}


 const  authinfo = {
      user,
      googleLogin,
      createUserLogin,
      userLogin,
      logOut
      
  }

  return (
    <Authcontext.Provider value={authinfo}>
         {children}
    </Authcontext.Provider>
  );
};

export default AuthProvider;