import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Avatar, IconButton, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const { user, logoutUser } = useAuth();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    logoutUser();
    handleMenuClose();
    navigate('/')
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#252525" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#FFFFFF' }}>
          YourAppName
        </Typography>
        {user ? (
          <Box>
            <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
              <Avatar alt="Profile Picture" src="https://via.placeholder.com/150" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{ mt: '45px' }}
            >
              <MenuItem onClick={handleMenuClose}>
                <Avatar alt="Profile Picture" src="https://via.placeholder.com/150" sx={{ mr: 2 }} />
                <Typography>{user.name || 'Username'}</Typography>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <Typography>Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Button color="inherit" sx={{ color: '#FFFFFF' }} onClick={handleLogin}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
