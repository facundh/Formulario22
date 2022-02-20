import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../../services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";



const Auth = createContext();
export const AuthConsumer = () => useContext(Auth);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [user]);

  const userRegister = async ({ name, lastName, email, password }) => {
   
    try {
      const registerUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(registerUser.user, {
        displayName: `${name} ${lastName}`,
      });
      setUser(registerUser.user);
     
    } catch (error) {
      console.log(error);
   
    }
  };

  const loginUser = async ({ email, password }) => {
    console.log(email, password);
    // showSpinner();
    try {
      const userloged = await signInWithEmailAndPassword(auth, email, password);
      console.log(userloged);
      setUser(userloged);
 
    } catch (error) {
      console.log(error);
 
    }
  };


  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null)
      console.log('Usuario deslogueado');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Auth.Provider
      value={{ userRegister, loginUser, logout,  user }}
    >
      {children}
    </Auth.Provider>
  );
};

export default AuthContext;