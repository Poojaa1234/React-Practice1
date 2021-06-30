import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <>
        {/* <h1>This will not reload page using Link</h1> */}
        <div className="menu" >
        <NavLink to="/" exact activeClassName="active_class"> About Us</NavLink> 
        <NavLink exact activeClassName="active_class" to ="/contact"> Contact Us</NavLink>
        <NavLink to="/Services" exact activeClassName="active_class">Services</NavLink>
        <NavLink to="/Search" exact activeClassName="active_class">Search</NavLink>
        <NavLink exact activeClassName="active_class" to ="/user/pooja/agrawal"> User</NavLink>
        </div>
        <br />
        {/* <h1>This will reload page</h1> */}
        {/* <a href="/">About Us</a>
        <a href="/contact">Contact Us</a> */}
        
        </>
    )

}
export default Navbar;