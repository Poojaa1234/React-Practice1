import React from 'react';
import {useParams,useLocation,useHistory} from 'react-router-dom';


// While we are not having hooks we are using match
// const User = ({match}) => {
//     return(
//         <h1>This is user {match.params.name} page</h1>
//     )
// }

const User = () => {
    const {name,lname} = useParams();
    const location =useLocation();
    const history = useHistory();
    console.log(history);
    return(
        <>
        <h1>This is user {name} {lname} page</h1>
        <p className="text-center">My current location is {location.pathname}</p>
        {location.pathname === `/user/pooja/agrawal` ?
        (<button className="text-capitalize m-3" onClick={() => history.goBack()}>
        Go Back</button>) : null }
        <button onClick={()=> history.push('/')}>HomePage</button>
        </>
    )
}
export default User;