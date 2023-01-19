import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import { Wrapper, Title, ContactsWrapper } from './App.styled';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('saved_contacts'));
    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('saved_contacts', JSON.stringify(nextContacts));
    }
  }

  formSubmitHandler = newContact => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: nanoid(), name: newContact.name, number: newContact.number },
      ],
    }));
  };

  handleFilterInputChange = event => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  renderContacts() {
    const { contacts, filter } = this.state;
    return contacts
      .filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const renderContacts = this.renderContacts();
    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm
          onSubmitForm={this.formSubmitHandler}
          contacts={contacts}
        />
        <Title>Contacts:</Title>
        <ContactsWrapper>
          <Filter filter={filter} onChange={this.handleFilterInputChange} />
          <ContactList
            contacts={renderContacts}
            deleteContact={this.deleteContact}
          />
        </ContactsWrapper>
      </Wrapper>
    );
  }
}
