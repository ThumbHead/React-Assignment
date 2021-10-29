import { render } from '@testing-library/react';
import React, {Component, Profiler}from 'react';
import ReactDOM from 'react-dom';


// Part :- Profiler in Reacts//

class NewAccountReports extends React.Component{
  constructor(props){
    super(props);
    this.state={
      FormData:'',
      ToDate:''
    };
  }
  
  handleChange=e=>{
    let name=e.target.name;
    let value=e.target.value;
    this.setState({
      [name]: value
    });
  }
  render(){
    return(
      <div>
        <h2>Welcome to New Account Reports Component...</h2>
        <p>
          <label>From Date: <input type="text" name="FromDate" onChange={this.handleChange} value={this.state.FromDate}></input></label>
        </p>
        <p>
          <label>To Date: <input type="text" name="ToDate" onChange={this.handleChange} value={this.state.ToDate}></input></label>
        </p>
        <input type="submit" value="Generate"></input>
      </div>
    );
  }

}

class LoansRepaymentreports extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h2>Welcome to Loan Repayment Reports Components...</h2>
      </div>
    );
  }
}

class ReportsDashboard extends React.Component{
  constructor(props){
    super(props);
  }
  
  callbackFunction=(id,phase,actualDuration,baseDuration,startTime,commitTime,interaction)=>{
    console.log('Id is:' +id+ ',Phase is:' +phase);
    console.log('Actual Duration is:' +actualDuration+'and Base Duration is:' +baseDuration);
  }
  render(){
    return(<React.Fragment>
      <div>
        <h2>welcome to Reports Dashboards...</h2>
        <Profiler id="newAccount" onRender={this.callbackFunction}>
        <NewAccountReports></NewAccountReports>
        </Profiler>
        <Profiler id="loanRepayments" onRender={this.callbackFunction}>
        <LoansRepaymentreports></LoansRepaymentreports>
        </Profiler>
      </div>
    </React.Fragment>)
  }
}

const element=<ReportsDashboard></ReportsDashboard>

ReactDOM.render(element,document.getElementById("root"));