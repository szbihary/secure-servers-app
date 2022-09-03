import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const isAuthenticated = true; // temp

  if (isAuthenticated) {
    navigate('/servers');
  }
  return (
    <>
      <h1>Login page</h1>
      <button onClick={() => navigate('/servers')}>Log in</button>
    </>
  );
};

export default Login;
