import ContactList from './components/ContactList'
import './App.css';
import { useState, useEffect } from 'react'

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
    window.location.reload();
  }

  const editContact = (index) => {
    const name = prompt("Enter a name");
    const phone = prompt("Enter a phone");
    var list = getContacts();
    list[index] = {name: name, phone: phone}
    setContacts({list});
    localStorage.setItem("ContactList", JSON.stringify(list));
    window.location.reload();
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
