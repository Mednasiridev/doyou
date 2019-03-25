import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small special-color-dark pt-4">
	    <div className="footer-copyright text-center py-3">© 2019 Copyright:
	      <a href="#"> DoYou Quiz & Tests</a>
	    </div>
	  </footer>
    );
  }
}

export default Footer;
