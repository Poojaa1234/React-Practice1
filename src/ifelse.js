import React from "react";
import Naukri from "./Naukri";
import Shine from './Shine';

const favApp = "Shine";

const FavA = () =>{
    if(favApp === "Naukri"){
        return <Naukri />
    
    }
    else{
        return <Shine />
    
    }

};

const Ifelse = () => (
  <>
  <h1>Below are the Example random Data:</h1>
  < FavA />
  </>
    );

export default Ifelse;

