import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer"

const Body = ({ children }) => {
  const location = useLocation();
  const isHiddenPage = ["/faqs", "/termsConditions", "/contact"].includes(location.pathname);

  return (
    <div className="flex flex-col h-screen">
      {/* Header at the top */}
      {!isHiddenPage && <Header />}

      {/* Main Content Section */}
      <div className="flex flex-1 ">
        {/* Sidebar */}
        {!isHiddenPage && (
          <div className="w-64 hidden md:flex">
            <Sidebar />
          </div>
        )}

        {/* Main Content Area */}
        <div className={`flex-1 ${isHiddenPage ? '' : 'md:mx-[130px]'}`}>
          <main>{children}</main>
        </div>
      </div>

      {/* Footer */}
      {!isHiddenPage && <Footer />}
    </div>
  );
};

export default Body;
