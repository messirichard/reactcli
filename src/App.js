import React, { Component } from 'react'
import Contacts from './Components/Contacts';
import Header from './Layout/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

class App extends Component{

  static propTypes = {

  }
  render(){
    
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
