import React, { useState } from "react";
import { FormConsumer } from "../context/Form/FormProvider";
import CamposForm from "../CamposForm/CamposForm";
import CamposList from "../CamposList/CamposList";

const CreateFormulario = ({ handleToggleShow }) => {
  const [form, setForm] = useState({
    nombre: "",
    campos: [],
  });

  const [editar, setEditar] = useState(false);
  const [editarState, setEditarState] = useState(null);

  const { addToFormularios } = FormConsumer();
  const [showCampos, setShowCampos] = useState(false);

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleToggleCampos = () => {
    setShowCampos(!showCampos);
  };

  const addCampos = (campo) => {
    setForm({
      ...form,
      campos: [...form.campos, campo],
    });
  };

  const deleteCampos = (id) => {
    setForm({
      ...form,
      campos: form.campos.filter((campo) => campo.id !== id),
    });
  };

  const editarCamposOpen = (id) => {
    setEditar(!editar);
    // SI esta en false editar
    if (!editar) {
      const objEditar = form.campos.find((campo) => campo.id === id);
      setEditarState(objEditar);
    } else {
      setEditarState(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToFormularios(form);
    handleToggleShow();
  };

  const confirmarEdicion = (campoEditado) => {
    setForm({
      ...form,
      campos: form.campos.map((campo) => {
        if (campo.id === campoEditado.id) {
          campo = campoEditado;
        }
        return campo;
      }),
    });

    setEditar(false);
  };

  return (
    <div className="container border my-5 py-5 w-100 px-3 rounded-2">
      <form>
        <h4 className="my-5 text-center display-4">Creador de formularios</h4>
        <div className="d-flex justify-content-around mt-4">
          <input
            type="text"
            name="nombre"
            className="form-control w-50 "
            placeholder="Nombre Formulario"
            onChange={handleInputChange}
          />
        </div>
      </form>
      {!showCampos && (
        <>
          {form.campos.length > 0 ? (
            <CamposList
              campos={form.campos}
              deleteCampos={deleteCampos}
              editarCamposOpen={editarCamposOpen}
            />
          ) : (
            <h3 className="text-center mt-2"> 'No hay Campos'</h3>
          )}
        </>
      )}
      {!editar ? (
        <button
          type="button"
          className="btn btn-success text-center w-50 d-flex justify-content-center mx-auto mt-3"
          onClick={handleToggleCampos}
        >
          {!showCampos ? "Agregar Campos" : "Cerrar"}
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success text-center w-50 d-flex justify-content-center mx-auto mt-3"
          onClick={editarCamposOpen}
        >
          Cerrar
        </button>
      )}
      {(showCampos || editar) && (
        <div className="mt-4 d-flex justify-content-center">
          <CamposForm
            addCampos={addCampos}
            handleToggleCampos={handleToggleCampos}
            editarState={editarState}
            editar={editar}
            confirmarEdicion={confirmarEdicion}
          />
        </div>
      )}
      <div className="d-flex justify-content-center mt-5 w-75 mx-auto">
        <button
          type="submit"
          className="btn btn-warning w-100"
          onClick={handleSubmit}
        >
          {" "}
          Finalizar{" "}
        </button>
      </div>
    </div>
  );
};

export default CreateFormulario;