import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

// Part 5:-List in React//

function Employee(props){
  return <div style={{border:"3px solid red"}}>
    <p>
      <label>Employee Id: <b>{props.data.Id}</b></label>
    </p>
    <p>
      <label>Employee Name: <b>{props.data.Name}</b></label>
    </p>
    <p>
      <label>Employee Location: <b>{props.data.Location}</b></label>
    </p>
    <p>
      <label>Employee Salary: <b>{props.data.Salary}</b></label>
    </p>
  </div>
}

function DisplayEmployees(props){
  const emplist=props.employeeList;

  const listElements=emplist.map((emp)=>
       <Employee key={emp.Id} data={emp}></Employee>
  );
   
  return(
    <div>
      {listElements}
    </div>
  )

}
const employees =[
  {Id:101,Name:'Abhi',Location:'Mumbai',Salary:15000},
  {Id:102,Name:'Akshay',Location:'Navi Mumbai',Salary:15000},
  {Id:103,Name:'Abvi',Location:'Thane',Salary:15000}
];

const element=<DisplayEmployees employeeList={employees}></DisplayEmployees>

ReactDOM.render(element,document.getElementById("root"));