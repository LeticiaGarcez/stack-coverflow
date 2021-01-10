import React from 'react'
import logo from "./images/logo.png";
import Input from "../src/components/Input"
import "./App.css";

const AppUI = () =>
  <React.Fragment>    
    {
      <div className="App">            
          <img src={logo} className="App-logo" alt="logo" />      
      </div>

    }

    <Input />

    {/*
      <footer className='login'>          
          <LoginGoogle />
      </footer>
    */}

  </React.Fragment>

export default AppUI