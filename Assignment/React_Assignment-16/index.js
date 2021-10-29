import { render } from '@testing-library/react';
import React, {Component, Profiler, useState}from 'react';
import ReactDOM from 'react-dom';


// Part :- Hooks in Reacts//

class Employee extends React.Component{
  constructor(props){
    super(props)
      this.state={
        Name:''
      }
    }
    
    changeName=e=>{
      this.setState({Name:e.target.value});
    }

    render(){
      return(
        <div>
          <h2>Welcome to Employee Components...</h2>
          <p>
            <label>Employee Name:
              <input type="text" value={this.state.Name} onChange={this.changeName}></input>
            </label>
          </p>
          <p>
            Entered Name: <b>{this.state.Name}</b>
          </p>
        </div>
      )
    }

  }

  function NewEmployee(){
    const [name,setName]=useState('Thumbstack');

    function changeName(e){
      setName(e.target.value)
    }
    return(
      <div>
        <h2>Welcome to Employee Function Components...</h2>
        <p>
          <label>Employee Name:
            <input type="text" value={name} onChange={changeName}></input>
          </label>
        </p>
        <p>
          Entered Name: <b>{name}</b>
        </p>
      </div>
    )
  }


const element=<NewEmployee></NewEmployee>

ReactDOM.render(element,document.getElementById("root"));