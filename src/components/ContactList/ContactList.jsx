import React from 'react';

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

export default ContactList;
