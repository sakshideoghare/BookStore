import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <div className="login-form-container">
    <Box
      sx={{
        maxWidth: 350,
        p: 4,
        boxShadow: 3,
        borderRadius: 3,
        backgroundColor: '#f5f5f5',
        mt: 12,
        mx: 'auto',
      }}oooo
    >
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <TextField label="Email" fullWidth margin="normal" />
      <TextField label="Password" type="password" fullWidth margin="normal" />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
        Login
      </Button>
    </Box>
  </div>
    
  );
};

export default LoginForm;
