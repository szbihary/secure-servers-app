import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar: React.FC = () => {
  let activeClassName = styles.active;

  return (
    <nav className={styles.navBar}>
      <div className={styles.navGroupLeft}>
        <NavLink
          to="/servers"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Servers
        </NavLink>
      </div>
      <div className={styles.navGroupRight}>
        <NavLink
          to="/logout"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Logout
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
