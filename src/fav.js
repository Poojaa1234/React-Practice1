import React from "react";
import Card from './Card';
import Sdata from "./Sdata";

const fav = () => (
  <>
  <h1>Below are the Example random Data:</h1>

 {Sdata.map((val) => {
  return(
    <Card 
    key ={val.id}
    imgsrc={val.imgsrc}
    title ={val.title} 
    sname ={val.sname} 
    href = {val.href} />
    );
 })}
  </>
    );

export default fav;

/*const Lcard = (val) => {
  return(
    <Card imgsrc={val.imgsrc}
     title ={val.title} 
     sname ={val.sname} 
     href = {val.href}
 />
  )

}  */