import React from "react";
import ReactDOM from "react-dom";
import DeleteButton from "remote/Buttons";
import InputField from "./Components/InputField";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: host</div>
    <InputField/>
    <br />
    <DeleteButton/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
