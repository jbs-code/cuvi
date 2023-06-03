import { useContext } from "react";

import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

import { PDFViewer } from "@react-pdf/renderer";

import { CreatePdf } from "./CreatePdf";
import { CVContext } from "../../CVContext/CVContext";

function ViewPDF() {
  const { stateCV, reset } = useContext(CVContext);
  const navigate = useNavigate();
  const params = useParams();

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

  const handleReturn = () => {
    navigate(`/${params.from}`);
  };

  return (
    <div className="w-100">
      <ul className="btn-container w-100 mt-4 mb-4">
        <button
          type="button"
          onClick={handleReturn}
          className="btn btn-purple w-30"
        >
          Volver
        </button>
       
        <button type="button" className="btn btn-purple w-30" onClick={showAlert}>
          Reset
        </button>
      </ul>
      <PDFViewer className="container">
        <CreatePdf stateCV={stateCV} />
      </PDFViewer>
    </div>
  );
}

export default ViewPDF;
