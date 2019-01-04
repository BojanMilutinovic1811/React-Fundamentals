import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Do something',
        done: false
      },
      {
        id: 2,
        title: 'Do something else some other time',
        done: false
      },
      {
        id: 3,
        title: 'Do something else',
        done: true
      }
    ]
  }

  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id
  )]})
  }

    markup = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done
      }
      return todo;
    })})
  }
  
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markup={this.markup} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
