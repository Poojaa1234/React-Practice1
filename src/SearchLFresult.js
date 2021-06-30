import React from 'react';

const Result = (props) =>{
    const image = `https://source.unsplash.com/user/erondu/600x400/?${props.name}`;
    return(
        <>
        <div>
            <img src={image} alt="SearchImage" />
        </div>
        </>
    )

}
export default Result;