import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Home, MenuBook, Info, ContactMail } from '@mui/icons-material';
import './Navbar.css'; // Optional for extra custom styles

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#1e293b' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">📚 Bookstore</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* Sidebar Menu as Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="sidebarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </a>
              <ul className="dropdown-menu" aria-labelledby="sidebarDropdown">
                <li className="dropdown-item">
                  <li><a className="dropdown-item" href="./Home">
                  <Home fontSize="small" style={{ marginRight: '6px' }} /> Home</a></li>
                </li>

                <li className="dropdown-item">
                  {/* <MenuBook fontSize="small" style={{ marginRight: '6px' }} /> */}
                  <li><a className="dropdown-item" href="./Books">
                  <MenuBook fontSize="small" style={{ marginRight: '6px' }} /> Books</a></li>
                </li>

                <li className="dropdown-item">
                  {/* <Info fontSize="small" style={{ marginRight: '6px' }} /> */}
                  <li><a className="dropdown-item" href="./#">
                  <Info fontSize="small" style={{ marginRight: '6px' }} /> About</a></li>
                </li>

                <li className="dropdown-item">
                  {/* <ContactMail fontSize="small" style={{ marginRight: '6px' }} /> */}
                  <li><a className="dropdown-item" href="./#">
                  <ContactMail fontSize="small" style={{ marginRight: '6px' }} /> Contact</a></li>
                </li>
              </ul>
            </li>

            {/* Optional Links */}
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
          </ul>

          {/* Search form */}
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

