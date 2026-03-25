import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="layout-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Global Decorative Background Shapes */}
      <div className="global-bg-shape shape-1"></div>
      <div className="global-bg-shape shape-2"></div>
      <div className="global-bg-shape shape-3"></div>
      <div className="global-bg-shape shape-4"></div>
      
      <Navbar />
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
