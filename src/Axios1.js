import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Axios1 = () => {
    const [num, setnum] = useState();
    const [name, setname] = useState();
    const [moves, setmoves] = useState()
    useEffect(()=>{
        async function getdata(){
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(response);
            setname(response.data.name);
            setmoves(response.data.moves.length);
        }
        getdata();
    })
    return(
        <>
        <h1>You choose <span style={{color:"red"}}> {num} </span> value</h1>
        <h1>My name is <span style={{color:"red"}}> </span> {name}</h1>
        <h1>I have <span style={{color:"red"}}> </span> {moves} moves</h1>
        <select className="mt-3 ml-4" value = {num} onChange={(event)=> {
              setnum(event.target.value);
        }}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        </>
    )
}
export default Axios1;