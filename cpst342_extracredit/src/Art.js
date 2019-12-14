import React, {Component} from 'react';
import {Jumbotron, Media} from 'reactstrap';
import Yoda from './assets/yoda.jpg';

export default class Arts extends Component {
    render(){
        return(
            <div>
            <Jumbotron style={{backgroundColor: 'brown'}}>
                <p>Hungry? How about some choco-artay!!</p>
            </Jumbotron>
            <Jumbotron style={{backgroundColor: 'lightgreen'}}>
            <p style={{color: 'black', font: 'Open Sans', alignContent: 'left'}}>YODA!!!</p>
            <img center src={Yoda} alt-text="Yoda"></img>
               </Jumbotron>
            <Jumbotron style={{backgroundColor: 'lightblue'}}>
                <h4>Submit your art by subscribing to us!</h4>
            </Jumbotron>
            </div>
        )
    };
}
