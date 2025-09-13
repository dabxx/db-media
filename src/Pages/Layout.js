import React from "react";
import { Outlet } from "react-router-dom";

import { Flex } from "@chakra-ui/react";

import styles from "../CSS-Files/Layout.module.css";
import Nav from "../Components/SideNav";
// import SideNav from "../Components/SideNav";

function Layout() {
  return (
    <div>
      <Nav />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
