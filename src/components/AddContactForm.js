import React from 'react'
import { useState } from 'react'

const AddContactForm = (props) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')


    return (
        <div>
            Add new contact
            <form onSubmit={() => props.addContact({name, phone})}>
                <input name='name' placeholder='Enter name here' onChange={(e)=>setName(e.target.value)} required/><br />
                <input name='phone' placeholder='Enter phone here' onChange={(e)=>setPhone(e.target.value)} required/><br />
                <input type='submit' value='Submit' />
            </form>
            <br />
        </div>
    )
}

export default AddContactForm
