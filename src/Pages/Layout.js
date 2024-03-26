import React from "react";
import { Outlet } from "react-router-dom";

import { Flex } from "@chakra-ui/react";

import styles from "../CSS-Files/Layout.module.css";
import SideNav from "../Components/SideNav";
// import Header from "../Components/Header";

function Layout() {
  return (
    <Flex>
      <SideNav />
      <div className={styles.appContent}>
        {/* <Header /> */}
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </Flex>
  );
}

export default Layout;
