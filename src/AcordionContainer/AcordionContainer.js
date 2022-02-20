import React from "react";
import { FormConsumer } from "../context/Form/FormProvider";
import config from "../listaFormulario.json";
import Acordion from "../Acordion/Acordion";

const AcordionContainer = () => {
 const {formularios} = FormConsumer();
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