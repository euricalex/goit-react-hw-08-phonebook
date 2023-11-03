import { Helmet } from 'react-helmet';



import { LoginForm } from 'components/Login/Login';
import { StyledContainer } from 'components/PhoneList/StyledPhoneList';

export default function Login() {
  return (
    <StyledContainer>
      <Helmet title="Login" />

      <h2>Login Form</h2>
      <h5>Please sign up and let's work!!!</h5>
      <LoginForm />

     
    </StyledContainer>
  );
}