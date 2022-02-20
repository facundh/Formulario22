import React from "react";

const TableBody = ({campo, index, deleteCampos, editarCamposOpen}) => {

  return (
    
        <tr>
          
          <td scope="col">{index + 1}</td>
          <td scope="col">{campo.type}</td>
          <td scope="col">{campo.label}</td>
          <td scope="col">{campo.required.toString()}</td>
          <td scope="col">{campo.style}</td>
          <td scope="col"><button className="btn btn-outline-danger btn-small my-1" onClick={() => deleteCampos(campo.id)}>Borrar</button></td>
          <td scope="col"><button className="btn btn-warning btn-small my-1" onClick={() => editarCamposOpen(campo.id)}>Editar</button></td>

        </tr>
   
  );
};

export default TableBody;