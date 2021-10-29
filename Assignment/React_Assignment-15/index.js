import { render } from '@testing-library/react';
import React, {Component, Profiler}from 'react';
import ReactDOM from 'react-dom';


// Part :- Render Props in Reacts//

class DisplayList extends React.Component{
  constructor(props){
    super(props);
    
  } 

  render(){
    return(
      <ul>
        {this.props.list.map(d=>(<li>{d}</li>))}
      </ul>
    );
  }
}

class Department extends React.Component{
  constructor(props){
    super(props);
    this.state={
      list:['Dev','Big Data','Mobility']
    };
  }

  render(){
    return(
      <div>
        <h2>Department List...</h2>
        {this.props.render(this.state.list)}
      </div>
    );
  }
}

class Project extends React.Component{
  constructor(props){
    super(props);
    
  }

  render(){
    return(
      <div>
        <h2>Project List...</h2>
        {this.props.render(this.props.list)}
      </div>
    );
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <React.Fragment>
        <Department render={(data)=><DisplayList list={data}></DisplayList>}></Department>
        <Project render={(data)=><DisplayList list={['P-1','P-2','P-3']}></DisplayList>}></Project>
      </React.Fragment>
    )
  }
}


const element=<App></App>

ReactDOM.render(element,document.getElementById("root"));