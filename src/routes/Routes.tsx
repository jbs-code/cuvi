import { createBrowserRouter } from "react-router-dom";

import Home from "../components/Home";
import Guide from "../components/Guide";
import Nav from "../components/components/Nav";
import ViewPDF from "../components/CreatePdf/ViewPDF";
import {
  Academic,
  Contact,
  Experience,
  Profile,
  SoftSkills,
  TechSkills,
  View,
} from "../components/FormCV";
import WebOnly from "../components/WebOnly/WebOnly";

export const router = createBrowserRouter([
  {
    element: <Nav />,
    children: [
      {
        path: "*",
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "guide",
        element: <Guide />,
      },
      {
        element: <WebOnly />,
        children: [
          {
            path: "view-pdf/:from",
            element: <ViewPDF />,
          },
          {
            element: <View />,
            children: [
              {
                path: "contact",
                element: <Contact />,
              },
              {
                path: "profile",
                element: <Profile />,
              },
              {
                path: "tech-skills",
                element: <TechSkills />,
              },
              {
                path: "soft-skills",
                element: <SoftSkills />,
              },
              {
                path: "academic",
                element: <Academic />,
              },
              {
                path: "experience",
                element: <Experience />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
