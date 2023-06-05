import React, { useContext, useEffect, useReducer, useRef } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import useForm from "../../hooks/useForm";
import { CVContext } from "../../CVContext/CVContext";
import { actionType } from "../../Types/cvReducerType";
import { initialState } from "../../helpers/initialState";
import { arraysReducer } from "../../reducers/arraysReducer";

type htType = {
  habilidadesTecnicas: string;
};

export function TechSkills() {
  const { stateCV, handleTemplateChange } = useContext(CVContext);
  const { data, handleInputChange, reset } = useForm(initialState("ht"));
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);
  const [htArray, dispatch] = useReducer(arraysReducer, {
    data: stateCV.habilidadesTecnicas.habilidadesTecnicas,
  });

  const { habilidadesTecnicas } = stateCV.habilidadesTecnicas;

  useEffect(() => {
    const action: actionType = {
      type: "ht",
      payload: { habilidadesTecnicas: htArray.data },
    };
    handleTemplateChange(action);
  }, [htArray, handleTemplateChange]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { habilidadesTecnicas } = data as htType;
    if (habilidadesTecnicas.length > 0) {
      dispatch({
        type: "addTechSkill",
        payload: habilidadesTecnicas,
      });
    }
    reset();
    inputRef.current!.value = "";
    inputRef.current!.focus();
  };

  const handleSkillDelete = (index: number) => {
    const newArray = habilidadesTecnicas.filter((ht, i) => i !== index);
    dispatch({
      type: "removeTechSkill",
      payload: newArray,
    });
  };

  const handlePDFView = () => {
    navigate(`/view-pdf${location.pathname}`);
  };

  return (
    <div className="view-form">
      <h1>Habilidades Técnicas</h1>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="habilidadesTecnicas"
            ref={inputRef}
            onChange={handleInputChange}
            className="input"
            placeholder="Ej: Manejo de hojas de cálculo"
          ></input>
          <button className="btn btn-purple w-80" type="submit">
            Agregar
          </button>
          <div className="form-skills">
            {habilidadesTecnicas?.map((ht, index) => (
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
        <Link className="link link-green w-20" to="/profile">
          Anterior
        </Link>
        <Link className="link link-green w-20" to="/soft-skills" >
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
