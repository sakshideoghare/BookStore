import React, { useState } from 'react';
import './AuthForm.css';
import { TextField, Button, Typography } from '@mui/material';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isLogin ? 'Logged in!' : 'Signed up!');
  };

  return (
    <div className="auth-container">
      <div className="tab-buttons">
        <button
          className={`tab-button ${isLogin ? 'active' : ''}`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`tab-button ${!isLogin ? 'active' : ''}`}
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </button>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className='form-head'> 
            <Typography variant="h5" gutterBottom>
            {isLogin ? 'Welcome To BookStrore!' : 'Create Account'}
            </Typography>
        </div>
       
        
        <TextField label="Email" type="email" fullWidth margin="normal" required sx={{ backgroundColor: 'white' }}/>
        <TextField label="Password" type="password" fullWidth margin="normal" required sx={{ backgroundColor: 'white' }}/>

        {!isLogin && (
          <TextField label="Confirm Password" type="password" fullWidth margin="normal" required sx={{ backgroundColor: 'white' }}/>
        )}

        {/* <Button variant="contained" color="primary" fullWidth type="submit" sx={{ mt: 2 }}> */}
        <button type="button" className="btn btn-outline-success">
    
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
