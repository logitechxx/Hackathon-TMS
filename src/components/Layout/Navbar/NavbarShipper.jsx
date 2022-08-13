import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function NavbarShipper() {
    return (
        <Flex
            p="5"
            justify="space-between"
            align="center"
        >
            <Heading as="h3" size="lg" color="facebook.700">LMS</Heading>
            <Button colorScheme="facebook" variant="solid">Shipper</Button>
        </Flex>
    )
}

export default NavbarShipper