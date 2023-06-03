import { useContext } from "react";

import { Outlet } from "react-router-dom";

import { CVContext } from "../../CVContext/CVContext";

import Swal from "sweetalert2";

export function View() {
  const { stateCV, reset } = useContext(CVContext);

  const {
    contacto,
    perfil,
    habilidadesTecnicas,
    habilidadesBlandas,
    experiencia,
    formacionAcademica,
  } = stateCV;

  const showAlert = () => {
    Swal.fire({
      text: "Reset eliminará toda la información que hayas enviado ¿Estás seguro que quieres hacerlo?",
      icon: "warning",
      showCancelButton: true,
      focusCancel: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Aceptar",
    }).then((result) => {
      if (result.isConfirmed) {
        reset();
      }
    });
  };

  return (
    <div className="view-container">
      <Outlet />
      <div className="view">
        <h1>View</h1>
        <div className="cv-container">
          <h1 className="nombre">{contacto.nombre}</h1>
          {contacto.nombre !== "" && contacto.email !== "" && (
            <div className="seccion">
              <h2 className="seccion-name">Contacto</h2>
              <div className="description">
                {contacto.localidad && (
                  <div className="item">
                    <span>Localidad:</span>
                    <p className="contacto-item"> {contacto.localidad}</p>
                  </div>
                )}

                {contacto.email && (
                  <div className="item">
                    <span>Email:</span>
                    <p className="contacto-item"> {contacto.email}</p>
                  </div>
                )}

                {contacto.telefono && (
                  <div className="item">
                    <span>Teléfono:</span>
                    <p className="contacto-item"> {contacto.telefono}</p>
                  </div>
                )}

                {contacto.linkedIn && (
                  <div className="item">
                    <span>Linkedin:</span>
                    <p className="contacto-item"> {contacto.linkedIn}</p>
                  </div>
                )}

                {contacto.webPersonal && (
                  <div className="item">
                    <span>Web personal:</span>
                    <p className="contacto-item"> {contacto.webPersonal}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {perfil.perfil !== "" && (
            <div className="seccion">
              <p className="perfil">{perfil.perfil}</p>
            </div>
          )}

          {(habilidadesTecnicas.habilidadesTecnicas.length > 0 ||
            habilidadesBlandas.habilidadesBlandas.length > 0) && (
            <>
              <div className="seccion tecnologias">
                <h2 className="seccion-name">Competencias</h2>
                <ul className="description">
                  {habilidadesTecnicas?.habilidadesTecnicas?.map((hb, i) => (
                    <p className="cv-skill" key={i}>
                      - {hb}
                    </p>
                  ))}
                </ul>
              </div>

              <div className="seccion habilidades">
                <ul className="description">
                  {habilidadesBlandas.habilidadesBlandas?.map((hb, i) => (
                    <li className="hb-item" key={i}>
                      {hb}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {experiencia.experiencia.length > 0 && (
            <div className="seccion">
              <h2 className="seccion-name">Experiencia</h2>
              {experiencia?.experiencia.map((ex, i) => (
                <div key={i} className="seccion-item">
                  <div className="fa-container">
                    <h4 className="fa-titulo">{ex.puesto}</h4>
                    <p className="seccion__p--cursiva">{ex.fecha}</p>

                    <p className="fa-description">{ex.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {formacionAcademica.formacionAcademica.length > 0 && (
            <div className="seccion">
              <h2 className="seccion-name">Formación académica</h2>
              {formacionAcademica?.formacionAcademica?.map((fa, i) => (
                <div key={i} className="seccion-item">
                  <div className="fa-container">
                    <h4 className="fa-titulo">{fa?.titulo}</h4>
                    <p className="seccion__p--cursiva">{fa?.fecha}</p>
                    <p className="fa-description">{fa?.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <button onClick={showAlert} className="btn btn-purple w-50 mt-3">
          Reset
        </button>
      </div>
    </div>
  );
}
