import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem';
import { List } from './ContactList.styled';

export default function ContactList({ contacts, deleteContact }) {
  return (
    <List>
      {contacts.map(contact => {
        const { name, id, number } = contact;
        return (
          <ContactListItem
            key={id}
            userId={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        );
      })}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
