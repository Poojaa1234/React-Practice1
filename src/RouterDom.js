import React from 'react';
import AboutR from './AboutR';
import ContactR from './ContactR';
import ErrorR from './ErrorR';
import User from './UserR';
import ServicesR from './ServicesR';
import Search from './SearchLiveFilter'
import {Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './Navbar';

// When we have a props we will use render else we will use component

const RDom = () => {
    const Name = ()=>{
        return <h1>My Name is Pooja</h1>
    }
    return(
        <>
        <Navbar/>
        <Switch>
            <Route exact path = '/' component={()=><AboutR name="About"/>} />
            <Route exact path ='/contact' component={ContactR} />
            <Route exact path ='/services' render={()=><ServicesR name="Services"/>} />
            <Route exact path ='/search' component={Search} />
            <Route exact path ='/user/:name/:lname' component={User} />
            <Route path ='/contact/name' component={Name} />
            {/* <Route component={ErrorR}></Route> */}
            <Redirect to="/" />
        </Switch>
        </>
    )

}
export default RDom;