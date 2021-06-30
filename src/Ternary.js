import React from "react";
import Naukri from "./Naukri";
import Shine from './Shine';

const favApp = "Shine";

const Ternary = () => (
  <>
  <h1>Below are the Example random Data:</h1>
  
  { (favApp === "Naukri") ? <Naukri /> : <Shine /> }
  </>
    );

export default Ternary;

