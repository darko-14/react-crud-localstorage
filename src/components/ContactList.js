import React from 'react'
import AddContactForm from './AddContactForm'
import '../App.css'

const ContactList = (props) => {
    
    return (
        <div>
            <AddContactForm addContact={props.addContact} />
            <hr />
            {props.contacts.length === 0 ? (<h1>No Contacts in the list.</h1>) :
            (<div> 
                <h2>{props.contacts.length} contacts in the list</h2>
                <br />
                <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Name</td>
                            <td>Phone</td>
                        </tr>
                    </thead>
                    <tbody>
                        {    
                            Array.from(props.contacts).map((item, index)=>{
                                return <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                    <td><button onClick={() => props.editContact(index)}>Edit</button></td>
                                    <td><button onClick={() => props.deleteContact(index)}>Delete</button></td>
                                </tr>
                            }) 
                        }
                    </tbody>
                </table>
            </div>)
            }                                   
        </div>
    )
}

export default ContactList
