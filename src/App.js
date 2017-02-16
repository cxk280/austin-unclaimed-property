import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class FormField extends Component {
  render() {
    return (
      <div className="formField" id="nameForm">
        <form action="https://data.austintexas.gov/resource/nguv-n54k.json" method="GET">
          {this.props.label}<input type="text" name="restaurant_name" /><br/><br/>
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
          Search restaurant inspection scores in city of Austin
        </h1>
        <FormField label="Enter a restaurant name: " />
      </div>
    );
  }
}

export default App;
