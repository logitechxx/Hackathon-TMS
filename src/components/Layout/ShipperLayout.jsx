import { Box } from '@chakra-ui/react';
import React from 'react';
import NavbarShipper from './Navbar/NavbarShipper';

function ShipperLayout() {
    return (
        <Box backgroundColor={"#282c34"}>
            <NavbarShipper />
        </Box>
    );
}

export default ShipperLayout;
