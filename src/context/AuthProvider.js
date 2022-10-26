import React, { useEffect } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../src/firebase/firebase.config';
import { useState } from 'react';


export const AuthContex = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const providerRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const providerGoogleLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const providerUpdateProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const providerLogOut = () => {
        setLoading(true);
        return signOut(auth);
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    const authInfo = {
        user,
        providerGoogleLogin,
        providerLogOut,
        providerRegister,
        providerUpdateProfile
    };

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;