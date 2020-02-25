import React, { Component } from 'react';
// import logo from './logo.svg';
import DotDraw from './components/dotDraw';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
          <DotDraw />
        </div>   
    );
  }
}

export default App;
