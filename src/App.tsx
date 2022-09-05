import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './pages/login/Login';
import Logout from './pages/logout/Logout';
import Servers from './pages/servers/Servers';
import ProtectedRoute from './pages/protectedRoute/ProtectedRoute';
import NotFound from './pages/notFound/NotFound';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/servers"
            element={
              <ProtectedRoute redirectPath="/">
                <Servers />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
