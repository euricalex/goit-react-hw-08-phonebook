import { useDispatch, useSelector } from 'react-redux';

import { changeFilter} from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <label>
        Find contacts by name
        <input
          onChange={e => dispatch(changeFilter(e.target.value))}
          value={filter}
        ></input>
      </label>
    </div>
  );
};