import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class FormField extends Component {
  render() {
    return (
      <div className="formField" id="nameForm">
        <form action ={this.props.action}>
          {this.props.label}<input type="text"/><br/><br/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Does Austin have your unclaimed property?
        </h1>
        <FormField action="#" label="Enter your name: " />
      </div>
    );
  }
}

export default App;
