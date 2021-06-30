import React from "react";

let currTime = new Date().getHours();
let greeting = "";
let cssStyle = {
  color :  "red"
}

function datetime(){

if(currTime >=1 && currTime < 12){
    greeting = "Good Morning";
    cssStyle.color = "green";
  }
  else if (currTime >=13 && currTime < 19)
  {
    greeting = "Good Afternoon";
    cssStyle.color = "orange";
  }
  else
  {
    greeting = "Good Night";
    cssStyle.color = "black";
  }

  return(
    <h1>Hello World <span style = {cssStyle}> {greeting}</span></h1>
  )

}

export default datetime;