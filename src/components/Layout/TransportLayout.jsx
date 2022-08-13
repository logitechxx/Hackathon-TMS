import { Box } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import './styles.css'

function Layout() {
  return (
    <Box className="layout-color">
      <Navbar/>
      <Outlet />
    </Box>
  );
}

export default Layout;
