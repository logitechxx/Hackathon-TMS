import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Profile from './Profile'

function NavbarShipper() {
    return (
        <Flex
            p="5"
            justify="space-between"
            align="center"
        >
            <Heading as="h3" size="lg" color="linkedin.100">LMS</Heading>
            <Profile/>
        </Flex>
    )
}

export default NavbarShipper