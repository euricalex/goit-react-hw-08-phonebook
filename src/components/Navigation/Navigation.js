import { useAuth } from 'hooks/UseAuth';
import { NavLink } from 'react-router-dom';
import { StyledNav } from './StyledNavigation';


export default function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <StyledNav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && (
        <>
          <NavLink to="/contacts">Contacts</NavLink>
          
        </>
      )}
    </StyledNav>
  );
}