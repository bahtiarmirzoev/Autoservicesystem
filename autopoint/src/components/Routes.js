import Login from "./Login";
import Register from "./Register";
import About from "./About";
import Calendar from "./Calendar";
import Services from "./Services";
import Contact from "./Contact";
import { Children } from "react";
import App from "../App";

import { parsePath } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "Calendar",
        element: <Calendar />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact/>
      }
    ],
  },
];

export default routes;
