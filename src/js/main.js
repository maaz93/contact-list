import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import AppAPI from "./utils/appAPI";

AppAPI.getContacts();
ReactDOM.render(<App />, document.getElementById("app"));