import React from "react";
import Navbar from "../nav/Nav";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
