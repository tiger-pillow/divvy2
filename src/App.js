import React, {Component} from 'react';
import './App.css';
import Infofill from './Infofill';
import DivvyTitle from './DivvyTitle';

class App extends Component {
  
  constructor () {
    super()
    this.state = {
      groups: []
    }
  }


  render () {
    return (
      <div>
        <DivvyTitle/>
        <Infofill/>
        {/*
        <Instructions/>
        <TimeTable/>
        */}

      </div>)
  }

}

export default App;
