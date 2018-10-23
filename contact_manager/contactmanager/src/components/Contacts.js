import React, { Component } from 'react';
import Contact from './Contact'

class Contacts extends Component {
    
    state = {
            contacts: [
                {
                    id: 1,
                    name: 'John Doe',
                    email: 'jdoe@gmail.com',
                    phone: '222-222-2222'
                },
                {
                    id: 2,
                    name: 'Bob Rock',
                    email: 'bobby@gmail.com',
                    phone: '222-333-2222'
                },
                {
                    id: 3,
                    name: 'Alan Ford',
                    email: 'fordy@gmail.com',
                    phone: '222-111-2222'
                }]
        } 
    
  
    render() {
     const {contacts} = this.state;
    return (
      <div>
        {contacts.map(contact => 
            <Contact contact={contact} key={contact.id}/>
        )}
      </div>
    )
  }
}


export default Contacts;