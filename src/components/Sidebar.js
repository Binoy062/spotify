import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div style={{ backgroundColor: '#f0f0f0', height: '100vh', padding: '10px' }}>
    <List>
      <ListItem button component={Link} to="/">
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/search">
        <ListItemText primary="Search" />
      </ListItem>
      <ListItem button component={Link} to="/library">
        <ListItemText primary="Your Library" />
      </ListItem>
    </List>
  </div>
);

export default Sidebar;
