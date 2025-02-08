import React, {useState} from 'react';
import Asidebar from './Asidebar';
import Header from './Header';
import Footer from './Footer';
import './css/root.css';
import './css/layout/media.layout.css';

const Layout = ({ children, extraClass }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='container'>
      <header className="color">
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
      </header>
      <div
        onClick={ toggleSidebar }
        className={`overflow
        ${isSidebarOpen ? 'open' : ''}
        `}>
      </div>
      <Asidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      <main className={`main-content ${extraClass || ''}`}>{children}</main>
      <footer className="color">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;