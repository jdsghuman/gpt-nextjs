import { useState, ReactNode } from "react";
import Nav from "@components/Nav";
// import Footer from "../Footer";
// import Backdrop from "../Backdrop";
// import SideDrawer from "../SideDrawer/SideDrawer";
// import { MetaTags } from "../PropTypes/Tags";
// import Meta from "../Meta";

interface Props {
  // metaTags: MetaTags;
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      {/* <Meta tags={metaTags} /> */}
      <Nav />
      {children}
    </>
  );
};

export default Layout;
