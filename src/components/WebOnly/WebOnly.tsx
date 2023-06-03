import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

//Dado que react-pdf solo funciona desde un ordenador, esta fue la manera que encontré
//para restringir el uso exclusivamente en ordenador y no en dispositivos móviles.
function WebOnly() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  if ((width > 810 && height > width) || (width > 810 && height > 480)) {
    return <Outlet />;
  }

  return <Navigate to="/" />;
}

export default WebOnly;
