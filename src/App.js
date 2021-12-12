
import './App.css';
import Editor from "./components/Editor";
import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
        <Editor />
    )
  }
}

export default App;
