import React,{useState} from 'react';
import Result from './SearchLFresult';

const Search = () =>{
    const [image, setimage] = useState('');

    const inputEvent = (event) =>{
        const data = event.target.value;
        console.log(data);
        setimage(data);

    }
    return(
        <>
        <div className="searchbar">
        <input type="text" placeholder="Search Anything" onChange={inputEvent} value={image} />
        
        {image==="" ? null : <Result name={image} /> }
        
        </div>
        
        </>
    )

}
export default Search;