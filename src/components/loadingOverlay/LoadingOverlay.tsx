import React from 'react';
import Loader from '../icons/Loader';
import styles from './LoadingOverlay.module.scss';

const LoadingOverlay: React.FC = () => {
  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.loaderBox}>
        <Loader className={styles.loader} />
      </div>
    </div>
  );
};

export default LoadingOverlay;
