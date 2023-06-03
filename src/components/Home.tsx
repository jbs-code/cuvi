import { Link } from "react-router-dom";
import resume from "../assets/resume.png";

function Home() {
  return (
    <div className="home">
      <main className="home-main">
        <div className="home-start layout-web">
          <h1>
            Aquí encontrarás una plantilla simple para elavorar tu currículum.
            Si aún no sabes como elavorar tu currículum puedes revisar la guía.
          </h1>
          <Link className="link btn btn-purple btn-home" to="./contact">
            Crea tu CV
          </Link>
          <Link className="link btn btn-purple btn-home" to="/guide">
            Guía
          </Link>
        </div>
        <div className="home-start layout-movil">
          <h1>
            Para un correcto funcionamiento es importante visitar este sitio desde un ordenador.
          </h1>
        </div>
        <div className="home-img">
          <img src={resume} alt="resume" />
        </div>
      </main>

      <footer className="home-footer">
        <span>Este sitio fue creado con fines educativos, si tiene alguna sugerencia puede ponerse en contacto <a href="https://jaimejb.com/" target="_blank" rel="noopener noreferrer">aquí</a>.</span>
      </footer>
    </div>
  );
}

export default Home;
