import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile} from "firebase/auth" ;
import app from '../components/firebase.config/firebase.config';
export const AuthContext = createContext() ;
const auth = getAuth(app)
const UserContext = ({children}) => {
//set user information
const [user , setUser] = useState({}) ;
//set loading 
const [loading , setLoading ] = useState(true) ;
//google provider
const googleProvider = new GoogleAuthProvider() ;
//github provider
const githubProvider = new GoogleAuthProvider() ;
//register a new user 
const createUser = (email , password) => {
setLoading(true)
return createUserWithEmailAndPassword(auth , email , password ) ;
}
//regiter and update name and profile 
const updateUser = (name , profile ) => {
setLoading(true)
return updateProfile(auth.currentUser , {
displayName:name ,
photoURL:profile , 
})
}
//log in with google
const logInWithGoogle = () => {
setLoading(true)
return signInWithPopup(auth ,googleProvider) ;
}

//log in with google
const logInWithGithub = () => {
setLoading(true)
return signInWithPopup(auth ,githubProvider) ;
}
//log in user 
const loginUser = (email , password) => {
setLoading(true) ;
return signInWithEmailAndPassword(auth , email , password) ;
}
//get user information 
useEffect(() => {
const unsubscribe = onAuthStateChanged(auth , (userInformation) =>  {
if(userInformation) {
setUser(userInformation) ;
setLoading(false)
}
})
return () => unsubscribe() ;
} , [])

//log out user 
const logOutUser = () => {
return auth.signOut() ;
}
const  updatePassword = (email) => {
    return sendPasswordResetEmail( auth  , email ) ;
    }
//share data by authInformation object variable 
const authInformation = {
createUser , updateUser , updatePassword , logInWithGoogle , logInWithGithub , loginUser ,
user , logOutUser , setUser , setLoading , loading 
} ;
return (
<>
<AuthContext.Provider value={authInformation}>
{children}
</AuthContext.Provider> 
</>
);
};

export default UserContext;