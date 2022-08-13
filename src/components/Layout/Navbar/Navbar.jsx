import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { transportersMenu } from './menu'
import NavbarSelections from './NavbarSelections'

function Navbar() {
  return (
    <Flex
      p="5"
      justify="space-between"
      align="center"
      >
        <Heading as="h3" size="lg" color="facebook.100">LMS</Heading>
          <NavbarSelections />
        <Button colorScheme="facebook" variant="solid">Transporter</Button>
    </Flex>
  )
}

export default Navbar