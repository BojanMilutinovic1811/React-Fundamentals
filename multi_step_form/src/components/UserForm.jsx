import React, { Component } from 'react'
import AddressForm from './AddressForm';

class UserForm extends Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        useAddress: false
    }

    handleNext = () => {

    }

    handlePrevious = () => {

    }

    handleInfo = () => {

    }

  render() {
    return (
      <div>
        <AddressForm/>
      </div>
    )
  }
}


export default UserForm; 