import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Quizmarried.css';
import thumbnail from '../img/cards.jpg';

import heart1 from './cards-img/heart1.png';
import heart2 from './cards-img/heart2.png';
import heart3 from './cards-img/heart3.png';
import heart4 from './cards-img/heart4.png';
import heart5 from './cards-img/heart5.png';
import heart6 from './cards-img/heart6.png';
import heart7 from './cards-img/heart7.png';
import heart8 from './cards-img/heart8.png';
import heart9 from './cards-img/heart9.png';
import heartB from './cards-img/heartB.png';
import heartA from './cards-img/heartA.png';
import heartK from './cards-img/heartK.png';

class Quizmarried extends Component {

  render() {
    return (
      <div className="Quizmarried">
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
						<h1>اختر  كارد </h1>
						
	    			</div>


	    		</div>
	    		<div className="card-lists">
		    		<div className="row justify-content-md-center cards-imgs">
						

						<div className="col-3">
							<Link to="/will-i-get-married/result" > <img src={heart1}/></Link>
						</div>
						<div className="col-3">
							<Link to="/will-i-get-married/result" > <img src={heart2}/></Link>
						</div>
						<div className="col-3">
							<Link to="/will-i-get-married/result" > <img src={heart3}/></Link>
						</div>
						<div className="col-3">
							<Link to="/will-i-get-married/result" > <img src={heart4}/></Link>
						</div>
						<div className="col-3">
							<Link to="/will-i-get-married/result" > <img src={heart5}/></Link>
						</div>
						<div className="col-3">
							<Link to="/will-i-get-married/result" > <img src={heart6}/></Link>
						</div>
						<div className="col-3">
							<Link to="/will-i-get-married/result" > <img src={heart7}/></Link>
						</div>
						<div className="col-3">
							<Link to="/will-i-get-married/result" > <img src={heart8}/></Link>
						</div>
						<div className="col-3">
							<Link to="/will-i-get-married/result" > <img src={heart9}/></Link>
						</div>
						<div className="col-3">
							<Link to="/will-i-get-married/result" > <img src={heartB}/></Link>
						</div>
						<div className="col-3">
							<Link to="/will-i-get-married/result" > <img src={heartA}/></Link>
						</div>
						<div className="col-3">
							<Link to="/will-i-get-married/result" > <img src={heartK}/></Link>
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

export default Quizmarried;
