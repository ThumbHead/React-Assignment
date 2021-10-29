import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';


// Part :- Refs in Reacts//

class QuantityIncrement extends React.Component{
  constructor(props){
    super(props);
    
    this.quantityRef=React.createRef();
  }

  incrementQuantity=()=>{
    this.quantityRef.current.value++;
  }

   render(){
     alert('Text Message');
     return(
       <div>
         <p>
           <label>Enter Quantity: <input type="text" ref={this.quantityRef}></input>
           <button onClick={this.incrementQuantity}>+</button>
           </label>
         </p>
       </div>
     )
   }
} 

class LogIn extends React.Component{
  constructor(props){
    super(props);
    this.userNameRef=React.createRef();
  }

  componentDidMount(){
    this.userNameRef.current.focus();
  }

  render(){
    return(
      <div>
        <h2>LogIn Screen...</h2>
        <p>
          <label>UserName: <input type="text" ref={this.userNameRef}></input></label>
        </p>
        <p>
          <label>Password: <input type="text"></input></label>
        </p>
        <button>LogIn</button>
      </div>
    )
  }
}

const element=<LogIn></LogIn>

ReactDOM.render(element,document.getElementById("root"));