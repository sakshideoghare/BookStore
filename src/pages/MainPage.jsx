import React from 'react';
import './MainPage.css';
import Sidebar from '../components/Sidebar';
import AuthForm from '../components/AuthForm';
import Navbar from '../components/Navbar';

const MainPage = () => {
  return (
    <div className="main-container">
      {/* <Sidebar /> */}
      <div className= "nav-bar"><Navbar /></div>
      
      <div className="auth-area">
        <AuthForm />
      </div>
    </div>
  );
};

export default MainPage;
