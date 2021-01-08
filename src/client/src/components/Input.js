import React from 'react'
import Button from './Button';
import StackApi from '../apiclient/StackApi'
import './Input.css'

export default class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        StackApi.get(this.state.value);
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>        
            <input type="text" className = 'input_busca' value={this.state.value} onChange={this.handleChange} />
            <Button
                label = {'Pesquisar'}
            />
        </form>
      );
    }
}
  