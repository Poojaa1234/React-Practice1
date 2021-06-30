import React, {useState, useEffect} from 'react';

const UseEffect = () => {
    const [sum, setsum] = useState(0);
    const [sums, setsums] = useState(0);
    
    useEffect(() => {
        alert("I am clicked");
    }, [sum]);

    
    return(
        <>
        <h1>Pooja Agrawal</h1>
        <button onClick = {() => { setsum(sum+1)}}>Click me 1st {sum}</button>
        <hr />
        <button onClick = {() => { setsums(sums+1)}}>Click me 2nd {sums}</button>
        </>
    )

}

export default UseEffect;