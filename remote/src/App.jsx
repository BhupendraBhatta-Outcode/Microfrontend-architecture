import React from "react";
import ReactDOM from "react-dom";
import DeleteButton from "./Components/Buttons";
import InputField from "host/InputField";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: remote</div>
    <br />
    <InputField/>
    <DeleteButton />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
