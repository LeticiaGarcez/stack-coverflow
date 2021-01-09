import React from 'react'
import Button from './Button';
import StackApi from '../apiclient/StackApi'
import './Input.css'
import SearchUI from '../pages/SearchUI';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        value: '',
        resultSearch: null,
        search: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getResultSearchCallback = this.getResultSearchCallback.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    StackApi.get(this.state.value, this.getResultSearchCallback); 
    event.preventDefault();
  }

  getResultSearchCallback(json) {       
    this.setState({resultSearch: json})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>        
        {!this.state.resultSearch ?               
          <>           
              <input type="text" className = 'input_busca' value={this.state.value} onChange={this.handleChange} />
              <Button label = {'Pesquisar'} />
          </>
         :

          <SearchUI                 
              apiResponse = {this.state.resultSearch}             
          />
    
        }
          
      </form>
    );
  }
}
  