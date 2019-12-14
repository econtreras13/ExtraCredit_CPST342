import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron} from 'reactstrap';
import {Link, BrowserRouter as Router, Route, Switch, useRouteMatch} from 'react-router-dom';
import './'
import Subscribe from './Subscribe';
import Home from './Home';
import Slideshow from './Slideshow';
import Sciences from './Sciences';
import Art from './Art';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Body/>
   </div>
  )
};


class Body extends Component {


  render(){
    return (
      
      <div className="bodyContent">
        

        <Router>
         <Switch>
           <Route exact path="/">
             <Home/>
           </Route>
           <Route exact path="/Subscribe">
             <SubscribePage/>
           </Route>
          <Route exact path="/Art">
            <Art />
          </Route>
          <Route exact path="/Sciences">
            <Sciences/>
          </Route>
         </Switch>
         </Router>
  </div>
    )
  }
};

class Navbar extends Component {
  render(){
    return (
     
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">Choco-Mania</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <a className="nav-link" href="/Art">Art</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Sciences">Sciences</a>
        </li>
      </ul>
      <a href="/Subscribe">Like us? Subscribe!</a>
      </div>
    
  </nav>
    )}
}

function SubscribePage() {
  return (
    <Subscribe/>
  );
}

function MenuItem({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <div className={match ? "active" : ""}>
      {match && "> "}
      <Link to={to}>{label}</Link>
    </div>
  );
}

export default App;