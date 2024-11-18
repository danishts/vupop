import React from 'react';
import Sidebar from './Sidebar';
import MobileSidebar from './MobileSidebar';
import MenuBar from './MenuBar';

const Layout = ({ isMobileSidebarOpen, toggleSidebar, children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar (desktop) */}
      <Sidebar />
      
      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isMobileSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content area */}
      <div className="flex flex-col flex-grow">
        {/* MenuBar */}
        <MenuBar toggleSidebar={toggleSidebar} />

        {/* Page Content */}
        <main className="flex-grow  bg-gray-100 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
