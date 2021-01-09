import React from 'react'
import ReactDOM from 'react-dom';
import App from '../App'
import './Button.css'

const Button = ({ label }) => {

  return <React.Fragment>
    <button className='button'>{label}</button>
  </React.Fragment>

}
export default Button

