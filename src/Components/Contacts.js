import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
    constructor(){
        super();
        this.state = {
            contacts: [
               {
                   id: 1,
                   name: 'Richard',
                   email: 'richardofay@gmail.com',
                   phone: '55555'
               },
               {
                    id: 2,
                    name: 'Richard1',
                    email: 'richardofay@gmail.com',
                    phone: '55555'
                },
                {
                    id: 3,
                    name: 'Richard23',
                    email: 'richardofay@gmail.com',
                    phone: '55555'
                } ,
                {
                    id: 4,
                    name: 'Richard3',
                    email: 'richardofay@gmail.com',
                    phone: '55555'
                } 

            ]
        }
    }

    deleteContact= () => {
        // const {contacts} = this.state;
        // const newContacts = contacts.filter(contact => 
        //     contact.id !== id)

        //     this.setState({
        //         contacts:newContacts
        //     })
        console.log(123)
    }

  render() {
    const {contacts} = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
            <Contact
                key={contact.id}
                name={contact.name}
                email={contact.email}
                phone={contact.phone}
                deleteClickHandler={this.deleteContact}
            />
        ))}
      </React.Fragment>
    )
  }
}

export default Contacts;