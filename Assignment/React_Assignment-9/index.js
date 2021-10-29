import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
// Part :-Forms in Reacts//

const EmployeeComponent=()=>{
  const formik=useFormik({
    initialValues:{
      Id:'',
      Name:'',
      Location:'',
      Salary:''
    },
    onSubmit:values=>{
      alert(JSON.stringify(values));
    }
  });

  return(
    <div>
      <h2>New Employee Forms...</h2>
      <form onSubmit={formik.handleSubmit}>
         <p>
           <label htmlFor="Id">Employee Id:</label>
           <input type="text" name="Id" id="Id" value={formik.values.Id} onChange={formik.handleChange}></input>
         </p>
         <p>
           <label htmlFor="Id">Name:</label>
           <input type="text" name="Name" id="Name" value={formik.values.Name} onChange={formik.handleChange}></input>
         </p>
         <p>
           <label htmlFor="Id">Location:</label>
           <input type="text" name="Location" id="Location" value={formik.values.Location} onChange={formik.handleChange}></input>
         </p>
         <p>
           <label htmlFor="Id">Salary:</label>
           <input type="text" name="Salary" id="Salary" value={formik.values.Salary} onChange={formik.handleChange}></input>
         </p>
         <button type="submit">Create</button>
      </form>
    </div>
  )
}

const element=<EmployeeComponent></EmployeeComponent>

ReactDOM.render(element,document.getElementById("root"));