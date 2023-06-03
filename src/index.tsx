import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import CVProvider from "./components/Provider/CVProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CVProvider>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </CVProvider>
  </React.StrictMode>
);
