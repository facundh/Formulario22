import { addDoc, collection, doc, query, where, getDocs, orderBy } from 'firebase/firestore';
import React, { createContext, useContext, useState } from 'react';
import { db } from '../../services/firebase';
import { AuthConsumer } from '../Auth/AuthProvider';
import Swal from 'sweetalert2';

const FormContex = createContext();
export const FormConsumer = () => useContext(FormContex);
const FormProvider = ({children}) => {
  const { user } = AuthConsumer();
  
  const [formularios, setFormormularios] = useState([]);

  
  const addToFormularios = async(form) => {
    
    try {
      await addDoc(collection(db, 'Formularios'), {...form, userId: user.uid, date: Date.now() })
      Swal.fire('Formulario creado','Podes encontrarlo en la seccion formulario', 'success')
    } catch (error) {
      console.log(error);
    }
    
  }
    
    const obtenerFormularios = async() => {
      try {
        const q = query(collection(db, "Formularios"), where("userId", "==", user.uid), orderBy('date', 'asc'));
        const querySnapshot = await getDocs(q);
        const response = querySnapshot.docs.map((doc) =>  ( {...doc.data(), id: doc.id}))
        setFormormularios(response);
         
        
      } catch (error) {
          console.log(error);
      }
    }
  return (
    <FormContex.Provider value={{formularios, addToFormularios, setFormormularios,obtenerFormularios}}>
        {children}
    </FormContex.Provider>
  );
};

export default FormProvider;