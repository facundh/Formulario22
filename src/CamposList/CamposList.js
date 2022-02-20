import React from "react";
import TableItem from "./TableItem";
import Table from "./Table";

const CamposList = ({ campos, deleteCampos, editarCamposOpen }) => {



  return (
    <>
      <Table>
        {campos.map((campo, index) => (
          <TableItem campo={campo} key={index} index={index} deleteCampos={deleteCampos} editarCamposOpen={editarCamposOpen} />
        ))}
      </Table>
    </>
  );
};

export default CamposList;