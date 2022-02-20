import React, { useEffect } from "react";
import { FormConsumer } from "../context/Form/FormProvider";
import config from "../listaFormulario.json";
import Acordion from "../Acordion/Acordion";
import { AuthConsumer } from "../context/Auth/AuthProvider";

const AcordionContainer = () => {
  const {user} = AuthConsumer();
  const {formularios, obtenerFormularios} = FormConsumer();
  
 useEffect(() => {
   if(user){
     obtenerFormularios();
     console.log('Entro al if');
   }
 },[user])
  return (
        <>
      {
          formularios.map((formulario, index) => (
              
                <Acordion formulario={formulario} key={index} index={index}/>

            ))
        }
        </>
    
  );
};

export default AcordionContainer;