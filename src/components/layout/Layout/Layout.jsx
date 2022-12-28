import React from "react";
import Footer from "../Footer/Footer";
import { Header } from "../Header";
import Nav from "../Nav/Nav";
import styles from "./styles/Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <main className={styles.layout__container}>
      <aside className={styles.layout__nav}>
        <Nav/>
      </aside>
      <div className={styles.layout__header}>
        <Header/>
      </div>
      <article className={styles.layout__content}>{children}</article>
      <div className={styles.layout__footer}>
        <Footer  />
      </div>
    </main>
  );
};

export default Layout;
