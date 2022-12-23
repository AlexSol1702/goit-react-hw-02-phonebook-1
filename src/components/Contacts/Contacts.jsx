import React from 'react';
import { Contact } from '../Contact/Contact';
import styles from './Contacts.module.css';
import { Filter } from '../Filter/Filter';

export const Contacts = ({
  contacts,
  onDeleteContact,
  onChangeFilter,
  value,
}) => (
  <>
    <h2 className={styles.title}>Contacts</h2>

    <Filter onChangeFilter={onChangeFilter} value={value} />

    <ol className={styles.list}>
      {contacts.map(contact => (
        <Contact
          removeContact={onDeleteContact}
          key={contact.id}
          contact={contact}
        />
      ))}
    </ol>
  </>
);
