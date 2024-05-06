import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
// import styles from "../../src/index.css";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <Navbar />
      <div className={"container "}>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
