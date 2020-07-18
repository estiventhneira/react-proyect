import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

//import BadgesNew from "./pages/BadgesNew.js";
import Badges from "./pages/Badges";

const container = document.getElementById("app");

ReactDOM.render(<Badges />, container);
