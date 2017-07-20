import React, {Component} from 'react' ;
import './App.css' ;

class Stopwatch extends Component {
 
 constructor(props) {
   super(props);
 
   this.state = {
       minutes: 0,
       seconds: 0
   };
 }
 

 
leading0(num) {
    return num < 10 ? '0' + num : num;
  }

 render() {
 	return(
 		<div> 
 		   <div>{leading0(this.state.minutes)} minutes</div>
 		   <div>{leading0(this.state.seconds)} seconds </div>
 		 </div>

 	)}
}

export default Stopwatch ;