import React from "react";
import Card from './Card';
import Sdata from "./Sdata";

const Shine =() => {

    return(
        <Card 
        key ={Sdata[2].id}
        imgsrc={Sdata[2].imgsrc}
        title ={Sdata[2].title} 
        sname ={Sdata[2].sname} 
        href = {Sdata[2].href} />
        );

}

export default Shine;