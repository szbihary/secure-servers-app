import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchServers } from '../../api/servers';
import NavBar from '../../components/navBar/NavBar';

const Servers: React.FC = () => {
  const { data } = useQuery(['servers'], fetchServers);
  console.log(data);
  return (
    <div>
      <NavBar />
      <h1>Servers page</h1>
    </div>
  );
};

export default Servers;
