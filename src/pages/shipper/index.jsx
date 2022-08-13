import {Box, Button, Link, Text, Flex} from '@chakra-ui/react';
import React from 'react';
import { TableShipper, CreateShipper } from '../../components'

function Shipper() {
    return (
        <Box
            p="15"
            m="10"
            backgroundColor='linkedin.200'>
            <Flex>
                <CreateShipper />
            </Flex>
            <TableShipper />
        </Box>
    );
}

export default Shipper;
