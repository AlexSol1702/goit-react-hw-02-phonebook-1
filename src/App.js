import { Component } from 'react';
import { FormInput } from './components/FormInput/FormInput';

import { Contacts } from './components/Contacts/Contacts';
import initialContacts from './components/Contacts/initialContacts.json';
import { nanoid } from 'nanoid';

import './App.css';

class App extends Component {
  state = {
    contacts: initialContacts,
    filterName: '',
  };

  deleteContact = contactId =>
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));

  onChangeFilter = text => this.setState({ filterName: text });

  filterContact = () => {
    const { contacts, filterName } = this.state;
    const toLowerText = filterName.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(toLowerText)
    );
  };

  addContact = contact => {
    const newContact = {
      ...contact,
      id: nanoid(),
    };
    if (this.state.contacts.find(contact => newContact.name === contact.name)) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  render() {
    const { filterName } = this.state;
    return (
      <div className="section">
        <>
          <FormInput onSubmit={this.addContact} />

          <Contacts
            contacts={this.filterContact()}
            onDeleteContact={this.deleteContact}
            onChangeFilter={this.onChangeFilter}
            value={filterName}
          />
        </>
      </div>
    );
  }
}

export default App;
