import React from "react";
import SurveyBody from "../components/SurveyBody";

const routes = [
  {
    path: "/dashboard",
    exact: true,
    name: "Survey",
    toolbar: () => <p>AKTCL_CEP</p>,
    main: () => <SurveyBody />,
  },
];

export default routes;
