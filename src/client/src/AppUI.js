import React from 'react'
import logo from "./logo.png";
import "./App.css";

const AppUI = ({}) =>
  <React.Fragment>
    {
        <div className="App">            
            <img src={logo} className="App-logo" alt="logo" />
            <input
                type="text"
                name="keyword"
                autoComplete="off"
                placeholder={'Digite aqui sua busca'}
                value={'event'}
                />
      
        </div>
    }
  </React.Fragment>

export default AppUI
