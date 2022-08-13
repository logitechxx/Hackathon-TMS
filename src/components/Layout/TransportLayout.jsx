import { Box } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

function Layout() {
  return (
    <Box>
      <Navbar/>
      <Outlet />
    </Box>
  );
}

export default Layout;
