import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet for nested routes
import Header from './Header';
import Sidebar from './Sidebar';

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Static Desktop Sidebar */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-grow flex-col overflow-y-auto bg-gray-800 pt-5">
          <div className="flex flex-shrink-0 items-center px-4">
            <h2 className="text-white text-lg font-semibold">Navigation</h2>
          </div>
          <div className="mt-5 flex flex-1 flex-col">
            <nav className="flex-1 space-y-1 px-2 pb-4">
              {/* Navigation Links Placeholder */}
              <a href="#" className="bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                Dashboard
              </a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                Other Link 1
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col md:pl-64">
        {/* Header */}
        <Header onMenuButtonClick={() => setSidebarOpen(true)} /> {/* Pass handler to Header */}

        {/* Page Content */}
        <main className="flex-1 py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <Outlet /> {/* Render nested routes here */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
