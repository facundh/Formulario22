import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';

const CamposForm = ({addCampos, handleToggleCampos, editarState, editar, confirmarEdicion}) => {
  const [campo, setCampo] = useState(editarState || {
    id: uuidv4(),
    label: "",
    type: "",
    required: false,
    style: "",
  });

  const handleInputChange = (e) => {
    setCampo({
      ...campo,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    if(campo.label === '' || campo.type === '' || campo.style === ''){
      alert('Todos los campos deben rellenarse');
      return;
    } 

     addCampos(campo)
     setCampo({
      label: "",
      type: "",
      required: false,
      style: "",
     })
     handleToggleCampos();
  }


  return (
    <div className="d-flex flex-column w-50 p-5 border">
      <select value={campo.type} name="type" className="form-select my-2" onChange={handleInputChange}>
        <option value="">Type</option>
        <option value="text">Text</option>
        <option value="number">Number</option>
        <option value="email">Email</option>
        <option value="password">Password</option>
        <option value="date">Date</option>
        <option value="time">Time</option>
        <option value="checkbox">Checkbox</option>
        <option value="radio">radio</option>
        <option value="submit">submit</option>
      </select>
      <input
        type="text"
        name="label"
        placeholder="Nombre del Campo"
        value={campo.label}
        className="form-control my-2"
        onChange={handleInputChange}
      />

      <div className="d-flex align-items-center form-check form-switch">
        <input
          type="checkbox"
          value={campo.required}
          name="required"
          className="form-check-input"
          onChange={(e) => setCampo({
              ...campo,
              required: e.target.checked
          }) }
        />
        <label className="form-check-label mx-3" >Es requerido?</label>
      </div>

      <input
        type="text"
        value={campo.style}
        name="style"
        placeholder="Agregar Estilo"
        className="form-control my-2"
        onChange={handleInputChange}
      />

      {
        editar 
        ?
        <button className="btn btn-outline-success mt-2" onClick={() => confirmarEdicion(campo)}>Confirmar edicion</button>
        :
        <button className="btn btn-outline-success mt-2" onClick={handleClick}>Agregar</button>
      }
        
    </div>
  );
};

export default CamposForm;