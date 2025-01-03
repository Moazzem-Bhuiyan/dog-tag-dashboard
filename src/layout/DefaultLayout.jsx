import React, { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/index.jsx";
import Sidebar from "../components/Sidebar/index.jsx";


const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

 
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content Area */}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Main Content */}
        <main>
          <div className=" w-full max-w-screen-3xl p-4 md:p-6 2xl:p-10 bg-[#404140]">
            <Outlet /> {/* Render route-specific components */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
