import React from "react";
import ReactDOM from "react-dom";
import {Home} from "./pages/Home";
import './style/style.css';

const App = () => {
  return (
    <div>
        <h1 className="main_header">Punk IPA API Consumer</h1>
        <Home />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));