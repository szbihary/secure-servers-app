import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { login } from '../../api/auth';
import LoginForm from '../../components/loginForm/LoginForm';
import LoadingOverlay from '../../components/loadingOverlay/LoadingOverlay';
import type { Credentials } from '../../@types';
import { SESSION_COOKIE_NAME } from '../../config';
import { HttpError } from '../../api/apiUtils';
import styles from './Login.module.scss';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (Cookies.get(SESSION_COOKIE_NAME)) {
      navigate('/servers');
    }
  }, [navigate]);

  const handleLogin = async (credentials: Credentials) => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      const { token } = await login(credentials);
      Cookies.set(SESSION_COOKIE_NAME, token, { expires: 1 });
      setIsLoading(false);
      if (token) {
        navigate('/servers');
      }
    } catch (error) {
      if (error instanceof HttpError && error?.status === 401) {
        setErrorMessage('The username or password is incorrect.');
      } else {
        setErrorMessage('Something went wrong, please try again.');
      }
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginBox}>
        <LoginForm onLogin={handleLogin} errorMessage={errorMessage} />
      </div>
      {isLoading && <LoadingOverlay />}
    </div>
  );
};

export default Login;
