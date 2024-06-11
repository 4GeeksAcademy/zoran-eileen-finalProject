import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link, Snackbar, Alert } from '@mui/material';
import { auth } from '../store/firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [formVisible, setFormVisible] = useState(true);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess(true);
      setFormVisible(false); 
    } catch (error) {
      setError(error.message);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSuccess(false);
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setError(null); 
  };

  return (
    <>
      {formVisible && (
        <Box
          component="form"
          onSubmit={handleFormSubmit}
          sx={{
            maxWidth: '300px',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#ffffff',
            textAlign: 'center',
            margin: 'auto',
            marginTop: '50px',
            position: 'relative',
          }}
        >
          <Typography variant="h6" gutterBottom>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Typography>
          <div style={{ marginBottom: '20px' }}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
              margin="normal"
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
              margin="normal"
            />
          </div>
          {error && (
            <Typography variant="body2" sx={{ color: 'red', marginBottom: '20px' }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              textTransform: 'none',
              borderRadius: '8px',
              boxShadow: 'none',
              padding: '10px',
              backgroundColor: '#FF6F00',
            }}
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
          <Typography variant="body2" sx={{ marginTop: '20px' }}>
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <Link href="#" onClick={toggleForm} sx={{ color: '#FF6F00' }}>
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </Link>
          </Typography>
        </Box>
      )}
      <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {isSignUp ? 'Sign-up successful! You are now logged in.' : 'Sign-in successful!'}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AuthForm;