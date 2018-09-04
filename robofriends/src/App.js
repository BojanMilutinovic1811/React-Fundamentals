import React, { Component } from 'react';
import {robots} from './robots.js';
import Cardlist from './Cardlist.js';
import Searchfield from './Searchfield';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      Searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({Searchfield: event.target.value})
  }


  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(this.state.Searchfield.toLocaleLowerCase())
    })
    return (
      <div className='tc'>
        <h1 className='robotitle'>ROBOFRIENDS</h1>
        <Searchfield onSearchChange={this.onSearchChange}/>
        <Cardlist robots={filteredRobots}/>
        
      </div>
    );
  }
}

export default App;
