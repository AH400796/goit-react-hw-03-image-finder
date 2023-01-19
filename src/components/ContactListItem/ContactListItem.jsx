import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  UserWrapper,
  Wrapper,
  NumberWrapper,
  ListItemButton,
} from './ContactListItem.styled';
import { TiUser, TiDelete } from 'react-icons/ti';

export default function ContactListItem({
  name,
  number,
  deleteContact,
  userId,
}) {
  return (
    <UserWrapper>
      <Wrapper>
        <TiUser size={25} color={'darkpurple'} />
        <ListItem>{name}:</ListItem>
      </Wrapper>
      <NumberWrapper>
        <ListItem>{number}</ListItem>
        <ListItemButton type="button" onClick={() => deleteContact(userId)}>
          <TiDelete size={25} color={'black'} />
        </ListItemButton>
      </NumberWrapper>
    </UserWrapper>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};
