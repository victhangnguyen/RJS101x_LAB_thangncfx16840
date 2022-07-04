// import logo from './logo.svg';
import React from 'react';
import './App.css';
//! Router Component
import { BrowserRouter } from 'react-router-dom';
//! Components
import Main from './components/MainComponent';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
