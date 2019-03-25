import React, { Component } from 'react';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import logo from './logo.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar/Navbar.js';
import Content from './Content/Content.js';
import Footer from './Footer/Footer.js';
import Quizmarried from './Quizmarried/Quizmarried.js';
import Quizmarriedresult from './Quizmarriedresult/Quizmarriedresult.js';



class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
           <Navbar />
          
           <Switch>
            <Route exact path="/" component={Content}/>
            <Route exact path="/will-i-get-married" component={Quizmarried}/>
            <Route exact path="/will-i-get-married/result" component={Quizmarriedresult}/>
           </Switch>
           <Footer />
          </div>
        </BrowserRouter> 
    );
  }
}

export default App;
