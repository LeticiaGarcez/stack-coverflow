import React from 'react'
import './Button.css'

export default class ButtonUI extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    window.location = '/stack'
    event.preventDefault();
  }

  render() {
    return <button className='button' onClick={this.handleClick}>{this.props.label}</button>
  };
}

