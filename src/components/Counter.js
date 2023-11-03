import { useSelector } from 'react-redux';
import { selectTotalContacts, selectVisibleContacts } from 'redux/contacts/selectors';



export default function CountOfContacts() {
  const visibleContacts = useSelector(selectVisibleContacts);
  const totalContacts = useSelector(selectTotalContacts);

  return (
    <>
      <span>
        <div>
          Total contacts:<b> {totalContacts}</b>
        </div>{' '}
        <div>
          Shown contacts:
          <b> {visibleContacts.length}</b>
        </div>
      </span>
    </>
  );
}