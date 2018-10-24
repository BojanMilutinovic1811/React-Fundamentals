import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../Context';

class Contact extends Component {
  state = {
    showContactInfo: false
  }
  
  onDeleteClick = (id, dispatch) => {
    console.log('hello  ')
    dispatch({type:'DELETE_CONTACT', payload: id})  
  }

  render() {
    const {id, name, email, phone} = this.props.contact;
    const {showContactInfo} = this.state;
    
  return (
    <Consumer>
      {value => {
        const {dispatch} = value;
        return(
          <div className='card card-body mb-3'>
              <h4>{name} 
              <i onClick={ () => this.setState({showContactInfo:!this.state.showContactInfo})} className="fas fa-sort-down" style={{cursor:'pointer'}}>
              </i>
              <i className='fas fa-times' onClick={this.onDeleteClick.bind(this, id, dispatch)} style={{cursor:'pointer', float:'right', color: 'red'}}>
              </i>
              </h4>
              {showContactInfo ? (<ul className='list-group'>
                  <li className='list-group-item'>email: {email}</li>
                  <li className='list-group-item'>phone: {phone}</li>
              </ul>) : null }
              
            </div>
        )
      }}
    </Consumer>
      
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

export default Contact;
