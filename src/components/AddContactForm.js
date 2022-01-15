import React from 'react'
import { useState } from 'react'

const AddContactForm = ({onAddOrEdit}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        onAddOrEdit({name, phone});
    }

    return (
        <div>
            Add new contact
            <form onSubmit={handleSubmit}>
                <input name='name' placeholder='Enter name here' onChange={(e)=>setName(e.target.value)} required/><br />
                <input name='phone' placeholder='Enter phone here' onChange={(e)=>setPhone(e.target.value)} required/><br />
                <input type='submit' value='Submit' />
            </form>
            <br />
        </div>
    )
}

export default AddContactForm
