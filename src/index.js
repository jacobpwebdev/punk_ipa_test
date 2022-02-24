import React from "react";
import ReactDOM from "react-dom";
import {Home} from "./pages/Home";
import './style/style.scss';

const App = () => {
  return (
    <div>
        <Home />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));