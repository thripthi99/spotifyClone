import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase";
export let AuthContextApi = createContext();


let AuthProvider = ({ children }) => {
    let [state, setstate] = useState(null)
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user.emailVerified === true) {
                setstate(user)
            } else {
                setstate(null)
            }
        })
    },[])
    return (
        <AuthContextApi.Provider value={state} >
            {children}
        </AuthContextApi.Provider>
    )
}
export default AuthProvider;