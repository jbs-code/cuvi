import { useContext, useEffect, useReducer, useRef } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import useForm from "../../hooks/useForm";
import { CVContext } from "../../CVContext/CVContext";
import { actionType } from "../../Types/cvReducerType";
import { initialState } from "../../helpers/initialState";
import { arraysReducer } from "../../reducers/arraysReducer";

type hbType = {
  habilidadesBlandas: string;
};

export function SoftSkills() {
  const { stateCV, handleTemplateChange } = useContext(CVContext);
  const { data, handleInputChange, reset } = useForm(initialState("hb"));
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);

  const [hbArray, dispatch] = useReducer(arraysReducer, {
    data: stateCV.habilidadesBlandas.habilidadesBlandas,
  });

  const { habilidadesBlandas } = stateCV.habilidadesBlandas;

  useEffect(() => {
    const action: actionType = {
      type: "hb",
      payload: { habilidadesBlandas: hbArray.data },
    };
    handleTemplateChange(action);
  }, [hbArray, handleTemplateChange]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { habilidadesBlandas } = data as hbType;
    if (habilidadesBlandas.length > 0) {
      dispatch({
        type: "addSoftSkill",
        payload: habilidadesBlandas,
      });
    }
    reset();
    inputRef.current!.value = "";
    inputRef.current!.focus();
  };

  const handleSkillDelete = (index: number) => {
    const newArray = habilidadesBlandas.filter((ht, i) => i !== index);
    dispatch({
      type: "removeSoftSkill",
      payload: newArray,
    });
  };

  const handlePDFView = () => {
    navigate(`/view-pdf${location.pathname}`);
  };

  return (
    <div className="view-form">
      <h1>Habilidades Blandas</h1>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="habilidadesBlandas"
            ref={inputRef}
            onChange={handleInputChange}
            className="input"
            placeholder="Ej: Trabajo en equipo"
          ></input>
          <button className="btn btn-purple w-80" type="submit">
            Agregar
          </button>
          <div className="form-skills">
            {habilidadesBlandas?.map((ht, index) => (
              <div key={index} className="form--skills-box">
                <span
                  onClick={() => handleSkillDelete(index)}
                  className="form--skills-delete"
                >
                  ✘
                </span>
                <p className="form--skills-item">{ht}</p>
              </div>
            ))}
          </div>
          <i className="form-i">
            Crea el PDF para saber cómo se ve tu currículum realmente.
          </i>
        </form>
        <Link className="link link-green w-20" to="/tech-skills">
          Anterior
        </Link>
        <Link className="link link-green w-20" to="/experience">
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
