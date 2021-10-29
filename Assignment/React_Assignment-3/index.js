import React from 'react';
import ReactDOM from 'react-dom';

// Part 3:-React Class Components//

class Employee extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props);
    
  }
  render(){
    return <div>
      <h2>Employee Details...</h2>
      <p>
        <label>Employee ID: <b>{this.props.Id}</b></label>
      </p>
      <p>
        <label>Employee Name: <b>{this.props.Name}</b></label>
      </p>
      <p>
        <label>Employee Loaction: <b>{this.props.Location}</b></label>
      </p>
      <p>
        <label>Employee Salary: <b>{this.props.Salary}</b></label>
      </p>
      <Department DeptName={this.props.DeptName} HeadName={this.props.HeadName}></Department>
    </div>
  }
}

class Department extends React.Component{
  render(){
    return <div>
      <h2>Department Details...</h2>
      <p>
        <label>DeptName: <b>{this.props.DeptName}</b></label>
      </p>
      <p>
        <label>HeadName: <b>{this.props.HeadName}</b></label>
      </p>
    </div>
  }
}

const element=<Employee Id="101" Name="ThambStack" Location="Mumbai" Salary="12345" DeptName="Dev" HeadName="Tech"></Employee>
ReactDOM.render(element,document.getElementById("root"));