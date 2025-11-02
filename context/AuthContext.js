'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '@/lib/firebase';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
// export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create user in firebase
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }


  // and img url and username upon signup
  const addNameImage = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      // photoURL: image
    })
  }

  // login user with email and password
  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // google login system....
  const googleLoginProvider = new GoogleAuthProvider()
  const googlelogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleLoginProvider)
  }

  // github login system
  const githubLoginProvider = new GithubAuthProvider();
  const githubLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, githubLoginProvider)
  }

  // logout the user
  const logOut = () => {
    return signOut(auth)
  }

  // monitor the user changes
  useEffect(() => {
    const anyChanges = onAuthStateChanged(auth, currentUser => {
      currentUser ? setUser(currentUser) : setUser(null)
      setLoading(false)
    })

    return () => {
      anyChanges();
    }
  }, []);

  const contextList = {
    signup, login, addNameImage,
    googlelogin, githubLogin,
    logOut,
    loading,
    user
  }

  return (
    <AuthContext.Provider value={contextList}>
      {children}
    </AuthContext.Provider>
  );
}