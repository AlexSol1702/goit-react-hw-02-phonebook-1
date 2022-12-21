import { Component } from "react";
import { FormInput } from "./components/FormInput/FormInput";
import { Contacts } from "./components/Contacts/Contacts";
import initialContacts from "./components/Contacts/initialContacts.json";
import { nanoid } from "nanoid";

import "./App.css";

class App extends Component {
  state = {
    contacts: initialContacts,
  };

  deleteContact = (contactId) =>
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));

  changeFilter = (text) => {
    const toLowerText = text.toLowerCase();

    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(toLowerText)
      ),
    }));
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
    const { contacts } = this.state;
    return (
      <div className="section">
        <>
          <FormInput onSubmit={this.addContact} />
          <Contacts
            contacts={contacts}
            onDeleteContact={this.deleteContact}
            onChangeFilter={this.changeFilter}
          />
        </>
      </div>
    );
  }
}

export default App;
