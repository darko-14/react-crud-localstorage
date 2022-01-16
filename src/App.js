import ContactList from './components/ContactList'
import './App.css';
import { useState } from 'react'

function App() {
  const [contacts, setContacts] = useState(getContacts())

  function getContacts(){
      if(localStorage.getItem("ContactList") == null)
          localStorage.setItem("ContactList", JSON.stringify([]))
      return JSON.parse(localStorage.getItem("ContactList"));
  }

  const addContact = data => {
    var list = getContacts();
    list.push(data);
    setContacts({list});
    localStorage.setItem("ContactList", JSON.stringify(list));
  }

  const deleteContact = id => {
    var list = getContacts();
    list.splice(id, 1);
    setContacts({list});
    localStorage.setItem("ContactList", JSON.stringify(list));
    
  }

  const editContact = (id) => {
    console.log("Edited contact: " + id+1);
  }

  return (
    <div className="App">
      <ContactList 
        contacts={contacts} 
        addContact={addContact}
        deleteContact={deleteContact}
        editContact={editContact}  
        />
    </div>
  );
}

export default App;
