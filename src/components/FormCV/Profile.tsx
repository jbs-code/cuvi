import { useContext, useEffect, useState, useRef } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import useForm from "../../hooks/useForm";
import { CVContext } from "../../CVContext/CVContext";
import { actionType } from "../../Types/cvReducerType";
import { initialState } from "../../helpers/initialState";

export function Profile() {
  const { stateCV, handleTemplateChange } = useContext(CVContext);
  const { data, handleInputChange } = useForm(initialState("perfil"));
  const [thereIsPerfil, setThereIsPerfil] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const perfilRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    perfilRef.current?.focus();
  });

  useEffect(() => {
    const { perfil } = stateCV.perfil;
    setThereIsPerfil(perfil.length > 0);
  }, [stateCV]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const action: actionType = {
      type: "perfil",
      payload: data,
    };
    handleTemplateChange(action);
  };

  const handlePDFView = () => {
    navigate(`/view-pdf${location.pathname}`);
  };

  return (
    <div className="view-form">
      <h1>Perfil</h1>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <textarea
            name="perfil"
            ref={perfilRef}
            onChange={handleInputChange}
            className="input-textarea"
            placeholder="Ej: Periodista egresado de la Univesidad de Metrópolis con una amplia experiencia en medios impresos y digitales. Mi trabajo ha sido reconocido por la prensa nacional y continuo preparándome con cursos relacionados a los medios de comunicación contemporáneos."
          ></textarea>

          <button className="btn btn-purple w-80" type="submit">
            Enviar
          </button>
          <i className="form-i">
            Crea el PDF para saber cómo se ve tu currículum realmente.
          </i>
        </form>
        <Link className="link link-green w-20" to="/contact">
          Anterior
        </Link>
        <Link
          className={!thereIsPerfil ? "link link-disabled w-20" : "link link-green w-20"}
          to="/tech-skills"
        >
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
