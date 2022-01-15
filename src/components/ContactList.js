import React from 'react'
import AddContactForm from './AddContactForm'
import { useState } from 'react'
import '../App.css'

const ContactList = () => {
    const [contacts, setContacts] = useState(getContacts())

    function getContacts(){
        if(localStorage.getItem("ContactList") == null){
            localStorage.setItem("ContactList", JSON.stringify([]))
        }
        return JSON.parse(localStorage.getItem("ContactList"));
    }

    const onAddOrEdit = data => {
        var list = getContacts();
        list.push(data);
        localStorage.setItem("ContactList", JSON.stringify(list));
        setContacts({list});
    }

    return (
        <div>
            <AddContactForm onAddOrEdit={onAddOrEdit} />
            <hr />
            <h2>List of contacts</h2>
            <br />
            <table>
                <thead>
                    <td>#</td>
                    <td>Name</td>
                    <td>Phone</td>
                </thead>
                <hr/>
                <tbody>
                    {
                        contacts.map((item, index)=>{
                            return <tr>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>Edit</td>
                                <td>Delete</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default ContactList
