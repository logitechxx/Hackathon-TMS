import {Box, Button, Link, Text} from '@chakra-ui/react';
import React from 'react';
import { TableShipper } from '../../components'

function Shipper() {
    return (
        <Box
            p="15"
            m="10"
            backgroundColor='linkedin.200'>
            <TableShipper />
        </Box>
    );
}

export default Shipper;
