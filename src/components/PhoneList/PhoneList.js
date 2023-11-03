import { useSelector } from 'react-redux';
import { PhoneItem } from '../PhoneItem/PhoneItem';
import { StyledItem, StyledList } from './StyledPhoneList';

import { selectContacts, selectFilter } from 'redux/contacts/selectors';


export const PhoneList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const getFiltered = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  const filteredContacts = getFiltered();
  return (
    <StyledList>
      
      {filteredContacts.map(contact => (
        <StyledItem key={contact.id}>
          <PhoneItem contact={contact} />
        </StyledItem>
      ))}
    </StyledList>
  );
};