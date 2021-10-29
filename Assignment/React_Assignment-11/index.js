import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

// Part :-Lifting stateup in Reacts//

class OrderComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={quantity:'',address:''};
  }

  orderInfoChanged=val=>{
    this.setState({quantity:val});
  }

  addressChanged=val=>{
    this.setState({address:val});
  }

  render(){
    return(
      <div>
        <h1>Product Order Screen...</h1>
        <ProductInfomationComponent quantity={this.state.quantity} onQuantityChange={this.orderInfoChanged}></ProductInfomationComponent>
        <AddressComponent address={this.state.address} onAddressChange={this.onAddressChanged}></AddressComponent>
        <SummaryComponent quantity={this.state.quantity} address={this.state.address} onQuantityChange={this.orderInfoChanged}></SummaryComponent>
      </div>
    )
    
  }
}

class ProductInfomationComponent extends React.Component{
  constructor(props){
    super(props);
  }

  handleChange=e=>{
    this.props.onQuantityChange(e.target.value);
  }

  render(){
    return(
      <div style={{border: '3px solid red'}}>
        <h2>Product Information...</h2>
        <p>
          <label>Product Name:
            <select>
              <option value="Product-1">Product-1</option>
              <option value="Product-2">Product-2</option>
              <option value="Product-3">Product-3</option>
            </select>
          </label>
        </p>
        <p>
          <label>Enter Quantity : <input type="text" value={this.props.quantity} onChange={this.handleChange}></input></label>
        </p>
      </div>
    );
  }
}

class AddressComponent extends React.Component{
  constructor(props){
    super(props);
  }

  handleChange=e=>{
    this.props.onAddressChange(e.target.value);
  }

  render(){
    return(
      <div style={{border:'3px solid red'}}>
        <h2>Address Information...</h2>
        <p>
          <label>
            Address : <textarea value={this.props.address} onChange={this.handleChange}></textarea>
          </label>
        </p>
      </div>
    )
    
  }
}

class SummaryComponent extends React.Component{
  constructor(props){
    super(props);
  }

  handleChange=e=>{
    this.props.onQuantityChange(e.target.value);
  }

  render(){
    return(
      <div style={{border:'3px solid red'}}>
        <h2>Summary Information...</h2>
        <p>
          <label>Product Name: <b>Product-1</b></label>
        </p>
        <p>
          <label>Enter Quantity: <input type="text" value={this.props.quantity} onChange={this.handleChange}></input></label>
        </p>
        <p>
          <label>Address: <b>{this.props.address}</b></label>
        </p>
        <button>Placed Order</button>
      </div>
    )
    
  }
}

const element=<OrderComponent></OrderComponent>

ReactDOM.render(element,document.getElementById("root"));