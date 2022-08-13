import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {transportersMenu} from './menu'
function Navbar() {
  return (
    <Flex
      p="5"
      justify="space-between"
      align="center"
      >
        <Heading as="h3" size="lg" color="facebook.700">LMS</Heading>
        <Flex 
          w="40%"
          justify="space-between"
          align="center"
          >
          {
            transportersMenu.map(item=>(
              <Text key={item.name} fontSize="18" fontWeight="semibold" color="facebook.300">
                <Link to={item.path}>{item.name}</Link>
              </Text>
            ))
          }
        </Flex>
        <Button colorScheme="facebook" variant="solid">Transporter</Button>
    </Flex>
  )
}

export default Navbar