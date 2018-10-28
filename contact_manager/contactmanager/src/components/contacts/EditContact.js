import React, { Component } from 'react';
import {Consumer} from '../../Context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    async componentDidMount() {
        const {id} = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const {name, email, phone} = res.data;
        console.log(res.data)
        this.setState({
            name: name,
            email: email,
            phone: phone})
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = async (dispatch,e) => {
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

        const updateContact = {
            name,
            email,
            phone
        }

        const {id} = this.props.match.params;

        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact);

        dispatch({type:'UPDATE_CONTACT', payload: res.data})

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })

        this.props.history.push('/');
    }
  render() {
    const {name, email, phone, errors} = this.state;

    return (
        <Consumer>
            {value => {
                const {dispatch} = value;
                return(
                    <div className='card mb-3'>
        <div className='card-header'>Edit Contact</div>
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
                <input type='submit' value='Update Contact' className='btn btn-block btn-success'></input>
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


export default EditContact; 