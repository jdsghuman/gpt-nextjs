import { useState, ReactNode } from "react";
import Nav from "@components/Nav";

import styles from "./Layout.module.scss";

interface Props {
  // metaTags: MetaTags;
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      {/* <Meta tags={metaTags} /> */}
      <Nav />
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default Layout;
