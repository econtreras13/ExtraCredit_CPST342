import React, {Component} from 'react';
import Slideshow from './Slideshow';
import {Jumbotron} from 'reactstrap';

export default class Home extends Component{
    render(){
        return (
          <Jumbotron style={{backgroundColor: "purple"}}>
            <div>
            <div>
          <h3>Do you love chocolate?</h3>
        </div>
        <div>
          <p>This is a place to make your chocolate dreams come true!</p>
              <p>Are you ready to start your adventure?</p> 
        </div>
        
        <div>
            <Slideshow />
        </div>
        </div>
        </Jumbotron>
        );
    }
}