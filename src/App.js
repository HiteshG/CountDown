import React, { Component } from 'react';
import './App.css';
import Clock from './clock.js' ;
import {FormGroup ,FormControl , Button} from 'react-bootstrap';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline});
  }


  render() {
    return (
      <div className="App"> 
      <div className = "Page-one" >
        <div className="App-header">
          <img src= "https://stauntonandhenry.com/972-large_default/marble-wall-clock.jpg" className="App-logo" alt="logo" />
          <h2>CountDown</h2>
        </div>

        <p className="App-intro">
            The bad news is Time flies. <br />
            The good news is you are the PILOT . 
        </p>

        <div className = "count"> CountDown to  <div className = "cap">{this.state.deadline} </div>  
        </div>
        
        <Clock 
         deadline = {this.state.deadline}
        />
            
         <FormGroup  className =" form" >
          <FormControl
           className ="bar"
           placeholder = "New Date" 
           onChange = {                                                        // how to handle blank event  
            event => this.setState({newDeadline: event.target.value}) } 
           onKeyPress = { event => {                                      // how to handle onKeyPress event
                    if (event.key === 'Enter') {
                      this.changeDeadline()
                    }
                  }}
            />
          <Button onClick = {() => this.changeDeadline()}
           className = "btn" >Submit </Button>
            </FormGroup>
      
     </div>
        
        <div className = "Page-two"> 
           <div className = "contact" >
         <h3>Do you have suggestions/feedback about this app?</h3>
            <p className = "par">
              Feel free to contact me.
            </p>
             </div>

      <div className="btnList text-center">
      <a className="btn btn-default" href="#"><i className="fa fa-twitter fa-lg" id="twitterIcon"></i> Twitter </a>
      <a className="btn btn-default" href="https://github.com/HiteshG"><i className="fa fa-github fa-lg" id="githubIcon"></i> GitHub </a>
      <a className="btn btn-default" href="https://www.linkedin.com/in/hitesh-gautam-180858136/"><i className="fa fa-linkedin-square fa-lg" id="linkedinIcon"></i> LinkedIn </a>
      <a className="btn btn-default" href="https://www.facebook.com/harry.gautam.98"> <i className="fa fa-facebook-official fa-lg" id="facebookIcon"></i>  Facebook </a>
      <a className="btn btn-default" href="https://mail.google.com/mail/u/1/#inbox"><i className="fa fa-envelope fa-lg" id="gmailIcon"></i> Gmail </a>
    </div>

       <p className="foot"> Copyrights © Hitesh Gautam  2017 || 
             </p>
        </div>
      </div>
    );
  }
}

export default App;
