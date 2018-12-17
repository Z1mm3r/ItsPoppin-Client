import React, { Component } from 'react';
import ItsPoppinWrapper from './ItsPoppinWrapper'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <ItsPoppinWrapper/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
