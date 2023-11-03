import { useDispatch } from 'react-redux';
import { RemoveButton } from './StyledPhoneItem';
import { fetchDeleteContact } from 'redux/contacts/operations';
import { NavLink, useLocation } from 'react-router-dom';

export const PhoneItem = ({ contact }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <>
      <NavLink to={`/contacts/${contact.id}`} state={{ from: location }}>
        <div>
          {contact.name}:{contact.number}
        </div>
        </NavLink>
        <RemoveButton
          value={contact.id}
          onClick={() => {
            dispatch(fetchDeleteContact(contact.id));
          }}
        >
          Delete
        </RemoveButton>
      
    </>
  );
};