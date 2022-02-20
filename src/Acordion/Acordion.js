import React, { useState } from "react";
import Input from "../components/UI/Input";

const Acordion = ({formulario, index}) => {


    const {nombre, campos} = formulario;

    const handleInputChange = () => {
      console.log('Handle');
    }


  return (

    <div className="accordion" id="accordionExample">
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${index}`}
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          {nombre}
        </button>
      </h2>
      <div
        id={`collapse${index}`}
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body mx-auto">
            <form>
               {campos.map((campo) => (
                    
                   <Input 
                   className='col-md-8 my-3 mx-auto'
                   type={campo.type}
                   value={campo.name}
                   label={campo.label}
                   required={true}
                   onChange={handleInputChange} 
                   name={campo.name} 
                   inputClassName={campo.style}
                   labelClassName='d-block'
                   checked={false}
                   campos={campo.campos}
                   /> 
                   ))}
                 
            </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Acordion;