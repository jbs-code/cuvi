import { useContext, useEffect, useReducer, useRef } from "react";

import { Link, useNavigate, useLocation } from "react-router-dom";

import useForm from "../../hooks/useForm";
import ShowEx from "../components/ShowEx";
import { CVContext } from "../../CVContext/CVContext";
import { actionType } from "../../Types/cvReducerType";
import { initialState } from "../../helpers/initialState";
import { arraysReducer } from "../../reducers/arraysReducer";

type ExType = {
  puesto: "";
  fecha: "";
  descripcion: "";
};

export function Experience() {
  const { stateCV, handleTemplateChange } = useContext(CVContext);
  const { data, handleInputChange, reset } = useForm(initialState("ex"));
  const navigate = useNavigate();
  const location = useLocation();
  const puestoRef = useRef<HTMLInputElement>(null);
  const fechaRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

  const [exArray, dispatch] = useReducer(arraysReducer, {
    data: stateCV.experiencia.experiencia,
  });

  const { experiencia } = stateCV.experiencia;
  const { puesto, fecha, descripcion } = data as ExType;

  useEffect(() => {
    const action: actionType = {
      type: "ex",
      payload: { experiencia: exArray.data },
    };
    handleTemplateChange(action);
  }, [exArray, handleTemplateChange]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (puesto.length > 0) {
      dispatch({
        type: "addExperience",
        payload: { puesto, fecha, descripcion },
      });
      reset();
      puestoRef.current!.value = "";
      puestoRef.current!.focus();
    }
  };

  const handleExperienceDelete = (index: number) => {
    const newArray = experiencia.filter((ht, i) => i !== index);
    dispatch({
      type: "removeExperience",
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
      <h1>Experiencia</h1>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <i className="form-i">
            Inicia con tu experiencia laboral más reciente
          </i>
          <label className="input-label" htmlFor="puesto">
            Puesto* :{" "}
            <input
              id="puesto"
              type="text"
              name="puesto"
              ref={puestoRef}
              onChange={handleInputChange}
              className="input input-w--smaller"
              placeholder="Ej: Reportero del diario Daily Planet de Metrópolis"
              onKeyDown={(e) => handleKeyDown(e, fechaRef)}
              value={puesto}
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
              placeholder="Fecha de inicio a fin. Ej: (09/2020) - (11/2022)"
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
              placeholder="Ej: Investigué sobre las causas de (...) Esto sirvió para (...)"
              value={descripcion}
            ></textarea>
          </label>

          <i className="form-i">Los campos con * son obligatorios</i>

          <button className="btn btn-purple w-80" type="submit">
            Agregar
          </button>

          <ShowEx
            handleDelete={handleExperienceDelete}
            experiencia={experiencia}
          />
          <i className="form-i">
            Crea el PDF para saber cómo se ve tu currículum realmente.
          </i>
        </form>
        <Link className="link link-green w-20" to="/soft-skills">
          Anterior
        </Link>
        <Link className="link link-green w-20" to="/academic">
          Siguiente
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
