import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

import "./Layout.css";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="Outlet">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
