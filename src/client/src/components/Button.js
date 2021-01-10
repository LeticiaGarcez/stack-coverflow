import React from 'react'
import { Button } from 'carbon-components-react';
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
    return <Button className = 'button' onClick={this.handleClick}>{this.props.label}</Button>
  };
}

