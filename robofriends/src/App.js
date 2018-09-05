import React, { Component } from 'react';
import Cardlist from './Cardlist.js';
import Searchfield from './Searchfield';
import Scroll from './Scroll';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      Searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({Searchfield: event.target.value})
  }


componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then( users => this.setState({robots: users }))
}

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(this.state.Searchfield.toLocaleLowerCase())
    })
    return (
      <div className='tc'>
        <h1 className='robotitle'>ROBOFRIENDS</h1>
        <Searchfield onSearchChange={this.onSearchChange}/>
        <Scroll>
        <Cardlist robots={filteredRobots}/>
        </Scroll>
      </div>
    );
  }
}

export default App;
