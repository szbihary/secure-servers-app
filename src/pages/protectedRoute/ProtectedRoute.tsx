import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: JSX.Element;
  isAuthenticated: boolean;
  redirectPath: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  isAuthenticated,
  redirectPath,
}) => {
  if (isAuthenticated) {
    return children;
  }
  return <Navigate to={redirectPath} replace />;
};

export default ProtectedRoute;
