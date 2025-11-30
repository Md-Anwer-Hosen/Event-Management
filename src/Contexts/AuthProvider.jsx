import React, { Children, useEffect, useState } from "react";
import { AuthContext } from "./Authcontext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import auth from "../FirebaseAuth/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create User-->

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login User-->

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //obsarve user-->

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  //log Out User-->

  const logOutUser = () => {
    return signOut(auth);
  };

  //updateProfile-->

  const updateUserProfile = (update_data) => {
    return updateProfile(auth.currentUser, update_data);
  };

  //sign In with google-->

  const signInUserWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  //signInwithGithub-->

  const signInUserWithGithub = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

  //verify email-->

  const userInfo = {
    user,
    createUser,
    logInUser,
    logOutUser,
    loading,
    setLoading,
    updateUserProfile,
    setUser,
    signInUserWithGoogle,
    signInUserWithGithub,
  };

  return (
    <AuthContext.Provider value={userInfo}> {children}</AuthContext.Provider>
  );
};

export default AuthProvider;
