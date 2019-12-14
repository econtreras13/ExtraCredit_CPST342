import React, {Component} from 'react';
import {Jumbotron} from 'reactstrap';

export default class Sciences extends Component {
    render(){
        return(
            <div>
            <Jumbotron style={{backgroundColor: 'brown'}}>
                <p>Check out these amazing chocolate science projects!</p>
            </Jumbotron>
            <Jumbotron style={{backgroundColor: 'lightgreen'}}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/BYyoa8q3Lvs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Jumbotron>
            <Jumbotron style={{backgroundColor: 'lightblue'}}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/M6oyV5Gj3ng" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Jumbotron>
            </div>
        )
    };
}