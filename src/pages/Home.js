import { Helmet } from 'react-helmet';

import { useAuth } from 'hooks/UseAuth';


import Register from './Register';
import { StyledContainer } from 'components/PhoneList/StyledPhoneList';
export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Helmet title="Phonebook" />

      {!isLoggedIn ? (
        <Register />
      ) : (
        <StyledContainer>
         
          <h2 style={{ fontSize: 44 }}>Phonebook Organizer</h2>

         
          
        </StyledContainer>
      )}
    </>
  );
}