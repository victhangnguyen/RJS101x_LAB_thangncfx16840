// import logo from './logo.svg';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';
import './App.css';
//! Router Component
import { BrowserRouter } from 'react-router-dom';
//! Components
import Main from './components/MainComponent';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
