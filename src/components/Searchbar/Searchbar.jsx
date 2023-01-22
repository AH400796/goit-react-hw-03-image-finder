import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Form, Input, Button } from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import toast from 'react-hot-toast';

export default class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  static propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
  };

  handleSubmitForm = event => {
    event.preventDefault();
    const { onSubmitForm } = this.props;
    const { searchQuery } = this.state;
    if (searchQuery.trim() === '') {
      toast('Please, specify your search criteria', {
        style: {
          fontSize: '16px',
          border: '1px solid #020071',
          padding: '10px',
          color: '#020071',
        },
        iconTheme: {
          primary: '#020071',
          secondary: '#FFFAEE',
        },
        position: 'top-right',
      });
      return;
    }
    onSubmitForm(searchQuery);
    this.setState({ searchQuery: '' });
  };

  handleInputChange = event => {
    const inputValue = event.target.value;
    this.setState({ searchQuery: inputValue });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmitForm}>
          <Button type="submit">
            <AiOutlineSearch size={20} color={'currentColor'} />
          </Button>
          <Input
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
          />
        </Form>
      </Header>
    );
  }
}
