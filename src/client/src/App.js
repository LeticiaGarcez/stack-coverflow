import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
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
        fetch("http://localhost:9000/")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">{this.state.apiResponse}</p>
            </div>
        );
    }
}

export default App;