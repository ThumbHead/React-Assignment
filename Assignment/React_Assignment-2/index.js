import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Part 2 :-React Components//

var DisplayEmployeeInfo=(employee)=>{
  return <div>
    <h1>Employee Details...</h1>
    <p>
      <label>Employee ID: <b>{employee.Id}</b></label>
    </p>
    <p>
      <label>Employee Name: <b>{employee.Name}</b></label>
    </p>
    <p>
      <label>Employee Location: <b>{employee.Location}</b></label>
    </p>
    <p>
      <label>Employee Salary: <b>{employee.Salary}</b></label>
    </p>
    <Department deptName={employee.deptName} headName={employee.headName}></Department>
  </div>;
}



const Department=(deptInfo)=>{
  return <div>
    <p>Dept Name is: <b>{deptInfo.deptName}</b></p>
    <p>Dept Head is: <b>{deptInfo.headName}</b></p>
  </div>
}

const element=<DisplayEmployeeInfo Id="101" Name="ThumbStack" Location="Mumbai" Salary="12345" deptName="Dev" headName="XYZ"></DisplayEmployeeInfo>
ReactDOM.render(element,document.getElementById("root"));