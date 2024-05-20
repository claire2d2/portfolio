import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

import "./Layout.css";

const Layout = () => {
  return (
    <div className="Navbar">
      <Navbar />
      <div className="Outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
