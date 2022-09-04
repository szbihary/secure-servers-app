import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { login } from '../../api/auth';
import LoginForm from '../../components/loginForm/LoginForm';
import type { Credentials } from '../../@types';
import { SESSION_COOKIE_NAME } from '../../config';
import styles from './Login.module.scss';

const Login: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get(SESSION_COOKIE_NAME)) {
      navigate('/servers');
    }
  }, [navigate]);

  const handleLogin = async (credentials: Credentials) => {
    const { token } = await login(credentials);
    Cookies.set(SESSION_COOKIE_NAME, token, { expires: 1 });
    if (token) {
      navigate('/servers');
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginBox}>
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
