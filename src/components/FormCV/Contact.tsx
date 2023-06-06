import { useContext, useEffect, useRef, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import useForm from "../../hooks/useForm";
import { CVContext } from "../../CVContext/CVContext";
import { actionType } from "../../Types/cvReducerType";
import { initialState } from "../../helpers/initialState";
import { IContacto } from "../../Types/ICv";

export function Contact() {
  const { stateCV, handleTemplateChange } = useContext(CVContext);
  const { data, handleInputChange } = useForm(initialState("contacto"));
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const nameRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const linkedInRef = useRef<HTMLInputElement>(null);
  const personalWebRef = useRef<HTMLInputElement>(null);
  const nextRef = useRef<HTMLAnchorElement>(null);

  const { nombre, localidad, email, telefono, linkedIn, webPersonal } =
    data as IContacto;

  useEffect(() => {
    const { contacto } = stateCV;
    setIsActive(!!contacto?.nombre && !!contacto?.email);
  }, [stateCV]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const action: actionType = {
      type: "contacto",
      payload: data,
    };
    handleTemplateChange(action);
    nextRef.current?.focus();
  };

  const handleKeyDown = (
    e: React.KeyboardEvent,
    ref: React.RefObject<HTMLInputElement>
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
      <h1>Contacto</h1>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <i className="form-i">Coloca mínimo tu nombre y correo electrónico</i>
          <input
            type="text"
            name="nombre"
            ref={nameRef}
            onChange={handleInputChange}
            className="input mt-1"
            placeholder="Nombre*"
            onKeyDown={(e) => handleKeyDown(e, locationRef)}
            value={nombre}
          ></input>
          <input
            type="text"
            name="localidad"
            ref={locationRef}
            onChange={handleInputChange}
            className="input mt-1"
            placeholder="Localidad"
            onKeyDown={(e) => handleKeyDown(e, emailRef)}
            value={localidad}
          ></input>
          <input
            type="email"
            name="email"
            ref={emailRef}
            onChange={handleInputChange}
            className="input mt-1"
            placeholder="Correo electrónico*"
            onKeyDown={(e) => handleKeyDown(e, phoneRef)}
            value={email}
          ></input>
          <input
            type="tel"
            name="telefono"
            ref={phoneRef}
            onChange={handleInputChange}
            className="input mt-1"
            placeholder="Teléfono"
            onKeyDown={(e) => handleKeyDown(e, linkedInRef)}
            value={telefono}
          ></input>
          <input
            type="text"
            name="linkedIn"
            ref={linkedInRef}
            onChange={handleInputChange}
            className="input mt-1"
            placeholder="LinkenIn"
            onKeyDown={(e) => handleKeyDown(e, personalWebRef)}
            value={linkedIn}
          ></input>
          <input
            type="text"
            name="webPersonal"
            ref={personalWebRef}
            onChange={handleInputChange}
            className="input mt-1"
            placeholder="Web Personal"
            value={webPersonal}
          ></input>
          <i className="form-i">Los campos con * son obligatorios</i>

          <button className="btn w-80 mt-2 btn-purple" type="submit">
            Enviar
          </button>
          <i className="form-i">
            Crea el PDF para saber cómo se ve tu currículum realmente.
          </i>
        </form>

        <Link
          className={
            !isActive ? "link link-disabled w-20" : "link link-green w-20"
          }
          to="/profile"
          ref={nextRef}
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
