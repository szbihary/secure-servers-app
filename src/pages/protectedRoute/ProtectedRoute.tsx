import React from 'react';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import { SESSION_COOKIE_NAME } from '../../config';

interface ProtectedRouteProps {
  children: JSX.Element;
  redirectPath: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  redirectPath,
}) => {
  const isAuthenticated = Cookies.get(SESSION_COOKIE_NAME);
  if (isAuthenticated) {
    return children;
  }
  return <Navigate to={redirectPath} replace />;
};

export default ProtectedRoute;
