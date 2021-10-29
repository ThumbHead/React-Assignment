import { render } from '@testing-library/react';
import React, {Component, Profiler, useState}from 'react';
import ReactDOM from 'react-dom';


// Part :- Hooks in Reacts//

function NewEmployee(){
   const[employee,setEmployeeData]=useState({Id:'',Name:'',Loction:'',Salary:''});
    
   function changeEmployeeInfo(e){
     setEmployeeData({...employee,[e.target.name]:e.target.value})
   }
    return(
      <div>
        <h2>Welcome to Employee Function Components...</h2>
        <p>
          <label>Employee Id: 
            <input type="text" name="Id" value={employee.Id} onChange={changeEmployeeInfo}></input>
          </label>
        </p>
        <p>
          <label>Employee Name:
            <input type="text" name="Name" value={employee.Name} onChange={changeEmployeeInfo}></input>
          </label>
        </p>
        <p>
          <label>Employee Location:
            <input type="text" name="Location" value={employee.Location} onChange={changeEmployeeInfo}></input>
          </label>
        </p>
        <p>
          <label>Employee Salary:
            <input type="text" name="Salary" value={employee.Salary} onChange={changeEmployeeInfo}></input>
          </label>
        </p>
        <p>
          EmployeeId: <b>{employee.Id}</b>,   Name: <b>{employee.Name}</b>,
               Location is: <b>{employee.Location}</b>,   and Salary is: <b>{employee.Salary}</b>
        </p>
        <SalaryComponent salary={employee.Salary} onSalaryChange={changeEmployeeInfo}></SalaryComponent>
      </div>
    )
  }

  const SalaryComponent=({onSalaryChange,salary})=>{
    return(
      <div>
        <h2>Welcome to Salary Component...</h2>
        <p>
          <label>Employee Salary:
            <input type="text" name="Salary" value={salary} onChange={onSalaryChange}></input>
          </label>
        </p>
      </div>
    )
  }


const element=<NewEmployee></NewEmployee>

ReactDOM.render(element,document.getElementById("root"));