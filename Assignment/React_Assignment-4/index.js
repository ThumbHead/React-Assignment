import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

// Part 4:-React States//

class CountChar extends React.Component{
  constructor(props){
    super(props);
    this.state={ 
      message:''
    };
  }

  onMessageChange(text){
    this.setState({
      message:'Message has '+text.length+' number of Char'
    });
  }

  render(){
    return <div>
      <h2>Welcome to Count Char Components...</h2>
      <p>
        <label>Enter Message : <input type="text" onChange={e=>this.onMessageChange(e.target.value)}></input></label>
      </p>
      <p>
        <label>{this.state.message}</label>
      </p>  
    </div>
  }
}





class Employee extends React.Component{
  state={counter:0};
  addEmployee=()=>{
    this.setState({counter:this.state.counter+1});
    // this.counter=this.counter+1;
    // alert("Adding New Employee");
    // alert('Add Employee Button is clicked '+ this.counter+' times');
  }
  render(){
    return <div>
      <h2>Welcome to Employee Components...</h2>
      <p>
        <button onClick={this.addEmployee}>Add Employee</button>
      </p>
      <p>
        <label>Add Employee Button is clicked: <b>{this.state.counter}</b> times</label>
      </p>

    </div>
  }
}

// const element=<Employee></Employee>
const element=<CountChar></CountChar>
ReactDOM.render(element,document.getElementById("root"));
