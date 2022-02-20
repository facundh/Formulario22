import React, { createContext, useContext, useState } from 'react';

const FormContex = createContext();
export const FormConsumer = () => useContext(FormContex);
const FormProvider = ({children}) => {

  const [formularios, setFormormularios] = useState([]);

  const addToFormularios = (form) => {
      setFormormularios(
        [...formularios, form]
      )
  }

  return (
    <FormContex.Provider value={{formularios, addToFormularios, setFormormularios}}>
        {children}
    </FormContex.Provider>
  );
};

export default FormProvider;