
import { StyledContainer } from 'components/PhoneList/StyledPhoneList';
import { Helmet } from 'react-helmet';


export default function NotFound() {
  return (
    <main>
      <Helmet title="Not Found..." />
      <StyledContainer>
        <h1 style={{ fontSize: 120 }}>404</h1>
        <b style={{ fontSize: 28 }}>Sorry, we couldn't find that page...</b>
      </StyledContainer>
      
    </main>
  );
}