import React from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
// import Boot2 from './bootstrap2';
import {BrowserRouter} from 'react-router-dom';
import RDom from './RouterDom';


ReactDOM.render(
     <BrowserRouter>
     <RDom/>
     </BrowserRouter>
    
    ,document.getElementById('root')

);
