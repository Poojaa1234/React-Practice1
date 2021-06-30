import React, {useState, useEffect} from 'react';

const useEffect2 = () => {
    const [num, setnum] = useState(0);
    useEffect(()=>{
        document.title=`You clicked me ${num} times`;
    })
    
    return (
        <>
        <button onClick = {()=> {
            setnum(num+1)
        }}>Click me {num}</button>
        </>
    )

}

export default useEffect2;