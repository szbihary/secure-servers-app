import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchServers } from '../../api/servers';
import NavBar from '../../components/navBar/NavBar';
import SimpleServersTable from '../../components/serversTable/SimpleServersTable';
import LoadingOverlay from '../../components/loadingOverlay/LoadingOverlay';
import styles from './Servers.module.scss';

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
        <SimpleServersTable data={data} />
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
