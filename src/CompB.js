import React, {useContext} from 'react';
import CompC from './CompC';
import {Firstname, Lastname} from './AppComp';


const CompB = () => {
    const fname = useContext(Firstname);
    const lname = useContext(Lastname);
    return(
    <>
    <h1>Component C {fname} {lname}</h1>
    </>
    )
}


export default CompB;