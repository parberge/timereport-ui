import React, { Component } from 'react'
import "../assets/css/custom.css";
import logo from '../assets/images/logos/CodeLabs_Logo2_White.png';

export default class NavBar extends Component {
  render() {
    return (
        <nav id="header" className="navbar navbar-fixed-top">
            <div id="header-container" className="container navbar-container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="index.html">
                <img src={logo} className="float-left mr-1" alt="Code Labs AB." height="25"/>
                     </a>  
                     <h3 className="float-left mr-1">TimeReport</h3>
                 </div>
            </div>
        </nav>
    )
  }
}
