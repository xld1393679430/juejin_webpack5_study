import React from "react";
import NotFoundSvg from './assets/imgs/not-found.svg'
import "./App.css";

const App = () => {
  return (
    <div>
      <p className="title">App</p>
      <hr />
      <NotFoundSvg width="200" height="200" /> 
      <hr />
    </div>
  );
};

export default App;
