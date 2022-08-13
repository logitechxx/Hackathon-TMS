import { Box } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarShipper from './Navbar/NavbarShipper';
import './styles.css'

function ShipperLayout() {
    return (
        <Box className="layout-color">
            <NavbarShipper />
            <Outlet/>
        </Box>
    );
}

export default ShipperLayout;
