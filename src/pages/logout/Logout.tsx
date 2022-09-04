import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../api/auth';

const Logout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate('/', { replace: true });
  }, [navigate]);

  return null;
};

export default Logout;
