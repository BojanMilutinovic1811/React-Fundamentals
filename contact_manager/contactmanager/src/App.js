import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding='Contact Manager'/>
        <div className='container'>
        <Contact name='John Doe' phone='545-555-5555' email='jdoe@gmail.com'/>
        <Contact name='Brian Bond' phone='333-555-5555' email='bb@gmail.com'/>
        </div>
      </div>
    );
  }
}

export default App;
