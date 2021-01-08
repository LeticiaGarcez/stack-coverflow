import React from 'react'
import logo from "./logo.svg";
import "./SearchUI.css";

const SearchUI = ({apiResponse}) =>
  <React.Fragment>
    {
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
                <h1 className="App-intro">{apiResponse}</h1>
        </div>
    }
  </React.Fragment>

export default SearchUI
