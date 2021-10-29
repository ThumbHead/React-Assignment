import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

// Part 5:-Interaction between Components//

class Employee extends React.Component{
  constructor(props){
    super(props);
    this.state={
      updatedSalary:null
    };
  }
getUpdatedSalary=(salary)=>{
  this.setState({updatedSalary:salary});
}

  render(){
    return <div>
      <h1>Employee Component...</h1>
      <p>
        <label>Id: <b>{this.props.Id}</b></label>
      </p>
      <p>
        <label>Name: <b>{this.props.Name}</b></label>
      </p>
      <p>
        <label>Location: <b>{this.props.Location}</b></label>
      </p>
      <p>
        <label>Total Salary: <b>{this.props.Salary}</b></label>
      </p>
      <p>
        <label>Updated Total Salary: <b>{this.state.updatedSalary}</b></label>
      </p>
      <Salary BasicSalary={this.props.BasicSalary} HRA={this.props.HRA} SpecialAllowance={this.props.SpecialAllowance} onSalaryChanged={this.getUpdatedSalary}></Salary>
    </div>
  }

}

 class Salary extends React.Component{
    constructor(props){
      super(props);
      this.state={
        basic:this.props.BasicSalary,
        hra:this.props.HRA,
        sa:this.props.SpecialAllowance
      };
    }

    updateSalary=()=>{
      let salary=parseInt(this.refs.basic.value)+parseInt(this.refs.hra.value)+parseInt(this.refs.sa.value);
      this.props.onSalaryChanged(salary);
    }

    render(){
      return <div>
        <h1>Salary Details...</h1>
        <p>
          <label>Basic Salary: <input type="text" ref="basic" defaultValue={this.state.basic}></input></label>
        </p>
        <p>
          <label>HRA: <input type="text" ref="hra" defaultValue={this.state.hra}></input></label>
        </p>
        <p>
          <label>Special Allowance: <input type="text" ref="sa" defaultValue={this.state.sa}></input></label>
        </p>
        <button onClick={this.updateSalary}>Update</button>
      </div>
    }
  }

  const element=<Employee Id="101" Name="ThumbStack" Location="Mumbai" Salary="50000" BasicSalary="25000" HRA="10000" SpecialAllowance="15000"></Employee>

  ReactDOM.render(element,document.getElementById("root"));





