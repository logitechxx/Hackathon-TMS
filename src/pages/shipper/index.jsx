import {Box, Button, Link, Text, Flex, Heading} from '@chakra-ui/react';
import React from 'react';
import { TableShipper } from '../../components'
import CreateShipper from '../../components/organisms/Shipper/Create/CreateShipper'

function Shipper() {
    return (
        <Box
            p="15"
            m="10"
            backgroundColor='linkedin.100'
            height='80vh'>
            <Flex justifyContent={"space-between"}>
                <Heading as={"h3"}>Shippment</Heading>
                <CreateShipper />
            </Flex>
            <TableShipper />
        </Box>
    );
}

export default Shipper;
