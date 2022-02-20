import React, { useContext, createContext, useState, useEffect } from "react";
import { db } from "../../services/firebase";
import { doc, getDocs,addDoc, query, collection, where, updateDoc} from "firebase/firestore";

import { AuthConsumer } from "../Auth/AuthProvider";

const UserContext = createContext(); // Creamos el contexto, luego va a ser el proveedor
export const UserConsumer = () => useContext(UserContext); // Creamos el consumidor

const UserProvider = ({ children }) => {
  const { user } = AuthConsumer();
  

  return (
    <UserContext.Provider value={{ wallet , movimientos, comprarCriptoMoneda,getMovimientos,ventaCriptoMoneda }} >{children}</UserContext.Provider>
  );
};

// User context provider en el value paso lo que quiero compartir con mis consumidores

export default UserProvider;