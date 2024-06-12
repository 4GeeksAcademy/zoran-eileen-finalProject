import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '/workspaces/zoran-eileen-finalProject/src/img/logo.png';
import Signup from './Signup.jsx';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showSignupForm, setShowSignupForm] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setShowSignupForm(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setShowSignupForm(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              <img src={logo} alt="Mock Airbnb Logo" style={{ height: '100px', marginRight: '30px' }} />
            </Link>
          </Typography>
          <Link to="/profile" style={{ color: 'inherit', textDecoration: 'none' }}>
            <IconButton color="inherit">
              <FontAwesomeIcon icon={faUser} />
            </IconButton>
          </Link>
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            color="inherit"
          >
            <FontAwesomeIcon icon={faBars} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            sx={{ width: '300px' }} 
          >
            {showSignupForm && (
              <MenuItem sx={{ padding: 0 }}>
                <Box sx={{ width: '100%' }}>
                  <Signup onSignup={() => {}} />
                </Box>
              </MenuItem>
            )}
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
