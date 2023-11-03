import { Helmet } from 'react-helmet';

// import { RegisterForm } from 'components/RegisterForm/RegisterForm';

import RegisterForm from 'components/RegisterForm';

export default function Register() {
  return (
    <div>
      <Helmet title="Registration" />

      <RegisterForm />
      
    </div>
  );
}