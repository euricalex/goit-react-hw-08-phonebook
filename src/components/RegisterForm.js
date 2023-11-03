import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';


import { Link } from 'react-router-dom';
import { register } from 'redux/auth/AuthOperations';
import { StyledContainer } from './PhoneList/StyledPhoneList';
import { StyledForm } from './Login/StyledLogin';


const formSchema = Yup.object({
  name: Yup.string().required('Must be filled'),
  email: Yup.string().email().required('Must be filled'),
  password: Yup.string().min(8).required('Must be filled'),
});

export default function RegisterForm() {
  const dispatch = useDispatch();



  const initialValues = { name: '', email: '', password: '' };

  return (
    <StyledContainer>
      <h2>Registration Form</h2>
      <h5>
        Have an account already? <Link to="/login">Sign Up</Link> please!
      </h5>
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          dispatch(register({ ...values }));
          
        }}
      >
        <StyledForm autoComplete="off">
          <label>
            Username
            <Field type="text" name="name" placeholder="Enter your name" />
            <ErrorMessage name="name" component="b" />
          </label>
          <label>
            Email
            <Field type="email" name="email" placeholder="Enter your email" />
            <ErrorMessage name="email" component="b" />
          </label>
          <label>
            Password
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage name="password" component="b" />
          </label>
          <button type="submit">Register</button>
        </StyledForm>
      </Formik>
    </StyledContainer>
  );
}