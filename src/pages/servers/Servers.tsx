import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchServers } from '../../api/servers';
import NavBar from '../../components/navBar/NavBar';
import ServersTable from '../../components/serversTable/ServersTable';
import styles from './Servers.module.scss';
import LoadingOverlay from '../../components/loadingOverlay/LoadingOverlay';

const Servers: React.FC = () => {
  const { isLoading, error, data } = useQuery(['servers'], fetchServers);
  let content = null;
  if (isLoading) {
    content = <LoadingOverlay />;
  } else if (error) {
    content = <h3>Something went wrong, please try again.</h3>;
  } else if (data) {
    content = (
      <div className={styles.tableContainer}>
        <ServersTable data={data} />
      </div>
    );
  }
  return (
    <div className={styles.page}>
      <NavBar />
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default Servers;
