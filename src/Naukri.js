import React from "react";
import Card from './Card';
import Sdata from "./Sdata";

const Naukri =() => {

return(
    <Card 
    key ={Sdata[1].id}
    imgsrc={Sdata[1].imgsrc}
    title ={Sdata[1].title} 
    sname ={Sdata[1].sname} 
    href = {Sdata[1].href} />
    );

}

export default Naukri;