import React from "react";
import add,{sub,mul,div} from './Calc';


function Calcapp(){
  return(
      <>
  <h1>Sum of number is {add(10,20)}</h1> ,
  <h1>Sub of number is {sub(20,10)}</h1> ,
  <h1>Mul of number is {mul(10,20)}</h1> ,
  <h1>Div of number is {div(10,2)}</h1> 
  </>
  )
}

export default Calcapp;