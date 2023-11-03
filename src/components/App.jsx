import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { refresh } from 'redux/auth/AuthOperations';
import { useAuth } from 'hooks/UseAuth';
import { PrivateRoute } from './PrivateRoute.js';
import { RestrictedRoute } from './RestrictedRoute';

import LoadingSpinnerComponent from 'react-spinners-components';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

const ContactEditPage = lazy(() => import('../pages/ContactEdit'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <LoadingSpinnerComponent type={'Gear'} color={'black'} size={'220px'} />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/" component={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/" component={<ContactsPage />} />
            }
          />
          <Route
            path="/contacts/:contactId"
            element={
              <PrivateRoute
                redirectTo="/contacts"
                component={<ContactEditPage />}
              />
            }
          />
         
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      
    </>
  );
};