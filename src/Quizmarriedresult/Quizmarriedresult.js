import React, { Component } from 'react';
import './Quizmarriedresult.css';

import { Link ,Redirect } from "react-router-dom";
class Quizmarriedresult extends Component {
  render() {
    return (
      <div className="Quizmarriedresult">
	    <div className="quiz-panel">
	    	<div className="container">
	    		<div className="row">
	    			<div className="col-md-10 mt-4 mb-4">
	    				<h3>هل سأتزوج و أرتبط هذا العام 2019 ؟ </h3>
	    				<div id="fb-share-button">
						    <svg viewBox="0 0 12 12" preserveAspectRatio="xMidYMid meet">
						        <path className="svg-icon-path" d="M9.1,0.1V2H8C7.6,2,7.3,2.1,7.1,2.3C7,2.4,6.9,2.7,6.9,3v1.4H9L8.8,6.5H6.9V12H4.7V6.5H2.9V4.4h1.8V2.8 c0-0.9,0.3-1.6,0.7-2.1C6,0.2,6.6,0,7.5,0C8.2,0,8.7,0,9.1,0.1z"></path>
						    </svg>
						    <span>شارك مع اصدقائك</span>
						</div>
						
	    			</div>


	    		</div>
	    		<div className="row">
	    			<div className="col-md-10 mt-4 mb-4">
	    				<div className="result-loading">
		    				😂😍😎
		    				<h3>جاري تحميل النتيجه ...</h3>

	    				</div>
	    			</div>
	    		</div>
	    		<div className="row">
	    			<div className="col-md-10 mt-4 mb-4">
	    				
	    				<div id="fb-share-button">
						    <svg viewBox="0 0 12 12" preserveAspectRatio="xMidYMid meet">
						        <path className="svg-icon-path" d="M9.1,0.1V2H8C7.6,2,7.3,2.1,7.1,2.3C7,2.4,6.9,2.7,6.9,3v1.4H9L8.8,6.5H6.9V12H4.7V6.5H2.9V4.4h1.8V2.8 c0-0.9,0.3-1.6,0.7-2.1C6,0.2,6.6,0,7.5,0C8.2,0,8.7,0,9.1,0.1z"></path>
						    </svg>
						    <span>شارك مع اصدقائك</span>
						</div>
						
						
	    			</div>


	    		</div>
	    	</div>
	    </div>
      </div>
    );
  }
}

setTimeout(
    function() {
       this.context.router.history.push(`/target`)
    }
    .bind(this),
    5000
);


export default Quizmarriedresult;
