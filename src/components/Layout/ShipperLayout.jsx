import { Box } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarShipper from './Navbar/NavbarShipper';

function ShipperLayout() {
    return (
        <Box backgroundColor={"#282c34"}>
            <NavbarShipper />
            <Outlet/>
        </Box>
    );
}

export default ShipperLayout;
