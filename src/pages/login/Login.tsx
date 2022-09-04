import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/loginForm/LoginForm';
import styles from './Login.module.scss';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const isAuthenticated = false; // temp

  if (isAuthenticated) {
    navigate('/servers');
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginBox}>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
