import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../Header/Header.jsx";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <Suspense fallback={null}>
        {children}
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Layout;
