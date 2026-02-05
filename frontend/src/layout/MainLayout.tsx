import React from 'react';
import Sidebar from './Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="d-flex">
      <Sidebar />
      <main className="main-content min-vh-100 bg-light">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
