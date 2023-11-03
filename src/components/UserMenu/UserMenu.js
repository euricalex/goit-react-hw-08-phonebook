import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/AuthOperations';
import { useAuth } from 'hooks/UseAuth';
import { StyledUser } from 'components/PhoneList/StyledPhoneList';


export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <StyledUser>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </StyledUser>
  );
}