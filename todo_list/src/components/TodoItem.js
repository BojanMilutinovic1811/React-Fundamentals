import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.done ? 'line-through' : 'none'
        }
    }
    render() {
     const {id, title} = this.props.todo;
       const markup = this.props.markup;
       const delTodo = this.props.delTodo;
        return (
      
        <div style={this.getStyle()}>
        
            <p ><input type='checkbox' onClick={markup.bind(this, id)}/> {title} <button onClick={delTodo.bind(this, id)} style={buttonStyle}>x</button></p>
        </div>

      
    )
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const buttonStyle = {
    color: 'red',
    float: 'right',
    padding: '3px',
    border: 'none',
    borderRadius: '50%',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginRight: '20px',
    height: '20px',
    width: '20px'
}

export default TodoItem;
