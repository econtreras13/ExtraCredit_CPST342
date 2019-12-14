import React, { Component } from 'react';
import './App.css';
import {Jumbotron} from 'reactstrap';

class Subscribe extends Component {
  
    render(){
        return (
            <Jumbotron>
                <h5>We're thrilled to have you join us!</h5>
            <form action="https://formsubmit.co/evelinc1113@gmail.com" method="POST">
                    <div className="form-group">
                        <label for="exampleInputEmail1">Full Name</label>
                        <input placeholder="Evelin Contreras" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Phone</label>
                        <input placeholder="555-555-5555" type="tel" className="form-control" id="Stuff" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
       required/>
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>           
                </form>
                </Jumbotron>
        )
    }
}

export default Subscribe;