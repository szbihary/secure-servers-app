import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchServers } from '../../api/servers';
import NavBar from '../../components/navBar/NavBar';
import ServersTable, {
  Server,
} from '../../components/serversTable/ServersTable';
import styles from './Servers.module.scss';

const Servers: React.FC = () => {
  const { isLoading, data } = useQuery(['servers'], fetchServers);
  let content = null;
  if (isLoading) {
    content = <h3>Loading...</h3>;
  } else if (data) {
    const tableData = data
      .slice()
      .sort(
        (a: Server, b: Server) =>
          a.distance - b.distance || a.name.localeCompare(b.name)
      );
    content = (
      <div className={styles.tableContainer}>
        <ServersTable data={tableData} />
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
