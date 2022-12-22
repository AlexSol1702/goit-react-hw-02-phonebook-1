import { Component } from "react";
import { FormInput } from "./components/FormInput/FormInput";

import { Contacts } from "./components/Contacts/Contacts";
import initialContacts from "./components/Contacts/initialContacts.json";
import { nanoid } from "nanoid";

import "./App.css";

class App extends Component {
  state = {
    contacts: initialContacts,
    filterName: [],
  };

  deleteContact = (contactId) =>
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));

  

  onChangeFilter = (text) => {
    const toLowerText = text.toLowerCase();

    if (text.length <= 1) {
      this.setState({filterName: []})
    } else {
      this.setState((prevState) => ({
        filterName: prevState.contacts.filter((contact) =>
          contact.name.toLowerCase().includes(toLowerText)
        ),
      }));
    }
    
  };

  addContact = (contact) => {
    const newContact = {
      ...contact,
      id: nanoid(),
    };
    if (
      this.state.contacts.find((contact) => newContact.name === contact.name)
    ) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      this.setState((prevState) => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  render() {
    const { contacts, filterName } = this.state;
    return (
      <div className="section">
        <>
          <FormInput onSubmit={this.addContact} />

          <Contacts
            contacts={filterName.length > 0 ? filterName : contacts}
            onDeleteContact={this.deleteContact}
            onChangeFilter={this.onChangeFilter}
            
          />
        </>
      </div>
    );
  }
}

export default App;
