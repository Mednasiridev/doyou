import React, { Component } from 'react';
import './Content.css';
import thumbnail from '../img/cards.jpg';
import { Link } from "react-router-dom";
class Content extends Component {
  render() {
    return (
      <div className="Content">
	    <div className="quiz-panel">
	    	<div className="container">
	    		<div className="row">
	    			<div className="col-md-10 mt-4 mb-4">
	    				<div className="card">
						  <img className="card-img-top" src={thumbnail} alt="Card image cap"/>
						  <div className="card-body">
						    <h1 className="card-title"><Link to="/will-i-get-married" >هل سأتزوج و أرتبط هذا العام 2019 ؟ اختر حجر</Link></h1>
						  </div> 
						</div>
	    			</div>
	    		</div>
	    	</div>
	    </div>
      </div>
    );
  }
}

export default Content;
