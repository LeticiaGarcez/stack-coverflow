import React, { Component } from "react";
import "./App.css";
import AppUI from './AppUI.js'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
/*
      fetch(getResource, {
        headers: requestHeaders(context)
      })
          .then(response => {
            if (!response.ok) {
              throw new Error('API error: Failed to fetch');
            }
            return response.json()
          })
          .then(json => {
            updateImageUrlWithTumborUrl(URLUtils.getThumborUrl(context), json)
            console.log(getResource, json)
            callback(json)
          })
          .catch(error => {
            error.number = 401
            context.onApiError(error)
          })
      }*/
        fetch("http://localhost:9000/testAPI")
          .then(response => {
            if (!response.ok)
              throw new Error('API error: Failed to fetch');

            return response.json()
          })
          .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
             <AppUI 
                apiResponse={this.state.apiResponse}
             />
        );
    }
}