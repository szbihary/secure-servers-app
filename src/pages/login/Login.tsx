import React from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/auth';
import LoginForm from '../../components/loginForm/LoginForm';
import type { Credentials } from '../../@types';
import styles from './Login.module.scss';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = async (credentials: Credentials) => {
    const { token } = await login(credentials);
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
