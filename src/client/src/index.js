import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom' 

ReactDOM.render(
  <BrowserRouter basename='/'>
    <Switch>
      <Route exact path='/stack'
              render={() =>
                  <App />
              }
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

