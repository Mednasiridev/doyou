import React, { Component } from 'react';
import './Navbar.css';
import logo from './logo.png';
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
	    <nav className="navbar navbar-default navbar-fixed-top">
	      <div className="container">
	         
	         <div className="text-center navbar-content">
	         	<Link to="/">
	         		<img src={logo} />
	         		<div className="navbar-logo-title">Do You</div>
	         	</Link>
	         </div>
	      </div>
	    </nav>
      </div>
    );
  }
}

export default Navbar;
