import React, { Component } from 'react';
import {Consumer} from '../../Context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (dispatch,e) => {
        e.preventDefault();
        const {name, email, phone} = this.state;

        if(name === '') {
            this.setState({errors:{name: 'Name is required'}})
            return
        }
        if(email === '') {
            this.setState({errors:{email: 'Email is required'}})
            return
        }
        if(phone === '') {
            this.setState({errors:{phone: 'Phone is required'}})
            return
        }

        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        }
        
        dispatch({type:'ADD_CONTACT', payload: newContact})

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })
    }
  render() {
    const {name, email, phone, errors} = this.state;

    return (
        <Consumer>
            {value => {
                const {dispatch} = value;
                return(
                    <div className='card mb-3'>
        <div className='card-header'>Add Contact</div>
        <div className='card-body'>
            <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <TextInputGroup 
                label='Name'
                placeholder='Enter name'
                name='name'
                value={name}
                onChange={this.onChange}
                error={errors.name}
                />
                <TextInputGroup 
                label='Email'
                type='email'
                placeholder='Enter email'
                name='email'
                value={email}
                onChange={this.onChange}
                error={errors.email}
                />
                <TextInputGroup 
                label='Phone'
                placeholder='Enter phone'
                name='phone'
                value={phone}
                onChange={this.onChange}
                error={errors.phone}
                />
                <div className='row'>
                    <div className='col-md-4'>
                    </div>
                    <div className='col-md-4'>
                <input type='submit' value='Add Contact' className='btn btn-block btn-success'></input>
                </div>
                </div>
            </form>
        
        </div>
      </div>
                )
            }}
        </Consumer>
    )
  }
}


export default AddContact; 