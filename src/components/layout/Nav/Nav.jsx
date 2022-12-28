import React from "react";
import styles from "./styles/Nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.nav__container}>
      <ul className={styles.nav__bar}>
        <li>Home</li>
        <li>Articles</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Nav;
