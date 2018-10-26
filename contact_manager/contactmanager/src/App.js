import React, { Component } from 'react';
import './App.css';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import {Provider} from './Context';
import AddContact from './components/contacts/AddContact'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider>
      <div className="App">
        <Header branding='Contact Manager'/>
        <div className='container'>
        <AddContact/>
        <Contacts/>
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
