import React from 'react';
import { NavLink } from "react-router-dom";

const ErrorR = () => {

    return(
        <>
        <h1>OOPS PAGE NOT FOUND</h1>
        <div className="back">
        <NavLink to="/">Go Back</NavLink>
        </div>
        </>
    )

}

export default ErrorR;