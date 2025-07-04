import React from 'react';
import './Sidebar.css';
import { Home, MenuBook, Info, ContactMail } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <Home sx={{ mr: 1 }} fontSize="small" />
        Home
      </div>

      <div className="sidebar-item">
        <MenuBook sx={{ mr: 1 }} fontSize="small" />
        Books
      </div>

      <div className="sidebar-item">
        <Info sx={{ mr: 1 }} fontSize="small" />
        About
      </div>

      <div className="sidebar-item">
        <ContactMail sx={{ mr: 1 }} fontSize="small" />
        Contact
      </div>
    </div>
  );
};

export default Sidebar;
