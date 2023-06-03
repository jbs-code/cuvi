import { Link, Outlet, useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const handleTitle = () => {
    navigate('/');
  }
  return (
    <div className="nav-container">
      <nav className="nav">
        <div className="nav-title">
            <h1 onClick={handleTitle}>Cuvi</h1>
        </div>
        

        <ul className="nav-ul">
          <Link className="btn btn-green link w-30 link-web__only" to="./contact">
            Crea tu cv
          </Link>
          <Link className="btn btn-green link w-30" to="/guide">
            Guía
          </Link>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default Nav;
