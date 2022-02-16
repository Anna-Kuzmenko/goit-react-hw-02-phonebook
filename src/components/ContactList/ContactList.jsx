import React from 'react';
import PropTypes from 'prop-types';

import {
  ContactText,
  DeleteButton,
  ContactItem,
  ConList,
} from './ContactList.styled';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ConList>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ContactText>
            {name}:{number}
          </ContactText>
          <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </ConList>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
