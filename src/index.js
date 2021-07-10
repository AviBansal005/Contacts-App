import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router} from "react-router-dom";
import {createStore} from "redux";
import contactReducer from './redux/reducers/contactReducer';
import {Provider} from "react-redux";

const store = createStore(contactReducer)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>  
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

