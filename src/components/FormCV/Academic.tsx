import { useContext, useEffect, useReducer, useRef } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import useForm from "../../hooks/useForm";
import ShowFa from "../components/ShowFa";
import { CVContext } from "../../CVContext/CVContext";
import { actionType } from "../../Types/cvReducerType";
import { initialState } from "../../helpers/initialState";
import { arraysReducer } from "../../reducers/arraysReducer";

type faType = {
  titulo: "";
  fecha: "";
  descripcion: "";
};

export function Academic() {
  const { stateCV, handleTemplateChange } = useContext(CVContext);
  const { data, handleInputChange, reset } = useForm(initialState("fa"));
  const navigate = useNavigate();
  const location = useLocation();
  const tituloRef = useRef<HTMLInputElement>(null);
  const fechaRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

  const [faArray, dispatch] = useReducer(arraysReducer, {
    data: stateCV.formacionAcademica.formacionAcademica,
  });

  const { formacionAcademica } = stateCV.formacionAcademica;
  const { titulo, fecha, descripcion } = data as faType;

  useEffect(() => {
    const action: actionType = {
      type: "fa",
      payload: { formacionAcademica: faArray.data },
    };
    handleTemplateChange(action);
  }, [faArray, handleTemplateChange]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (titulo.length > 0) {
      dispatch({
        type: "addAcademic",
        payload: { titulo, fecha, descripcion },
      });
      reset();
      tituloRef.current!.value = "";
      tituloRef.current!.focus();
    }
  };

  const handleAcademicDelete = (index: number) => {
    const newArray = formacionAcademica.filter((ht, i) => i !== index);
    dispatch({
      type: "removeAcademic",
      payload: newArray,
    });
  };

  const handleKeyDown = (
    e: React.KeyboardEvent,
    ref:
      | React.RefObject<HTMLInputElement>
      | React.RefObject<HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      ref.current?.focus();
    }
  };

  const handlePDFView = () => {
    navigate(`/view-pdf${location.pathname}`);
  };

  return (
    <div className="view-form">
      <h1>Formación Académica</h1>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <label className="input-label" htmlFor="titulo">
            Título* :{" "}
            <input
              id="titulo"
              type="text"
              name="titulo"
              ref={tituloRef}
              onChange={handleInputChange}
              className="input input-w--smaller"
              placeholder="Ej: Grado de Periodista en la Universidad de Metrópolis."
              onKeyDown={(e) => handleKeyDown(e, fechaRef)}
              value={titulo}
            ></input>
          </label>

          <label className="input-label" htmlFor="fecha">
            Fecha* :{" "}
            <input
              id="fecha"
              type="text"
              name="fecha"
              ref={fechaRef}
              onChange={handleInputChange}
              className="input input-w--smaller"
              placeholder="Fecha de inicio a fin. Ej: 2015 - 2020"
              onKeyDown={(e) => handleKeyDown(e, descRef)}
              value={fecha}
            ></input>
          </label>

          <label className="input-label" htmlFor="descripcion">
            Descripción :{" "}
            <textarea
              id="descripcion"
              name="descripcion"
              ref={descRef}
              onChange={handleInputChange}
              className="input-textarea--smaller"
              placeholder="Ej: Graduado con honores por mi investigación sobre..."
              value={descripcion}
            ></textarea>
          </label>

          <i className="form-i">Los campos con * son obligatorios</i>

          <button className="btn btn-purple w-80" type="submit">
            Agregar
          </button>

          <ShowFa
            handleDelete={handleAcademicDelete}
            formacionAcademica={formacionAcademica}
          />
          <i className="form-i">
            Crea el PDF para saber cómo se ve tu currículum realmente.
          </i>
        </form>
        <Link className="link link-green w-20" to="/experience">
          Anterior
        </Link>
        <button
          type="button"
          className="link link-btn link-green w-20"
          onClick={handlePDFView}
        >
          Crear PDF
        </button>
      </div>
    </div>
  );
}
