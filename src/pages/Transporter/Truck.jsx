import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { TableTruck } from '../../components'
import CreateTruck from '../../components/organisms/Truck/Create'

function TruckPage() {
  return (
    <Box
    p="15"
    m="10"
    backgroundColor='facebook.200'
    height="80vh">
      <Flex justifyContent={"space-between"}>
      <Heading as={"h3"}>Truck</Heading>
      <CreateTruck />
      </Flex>
        <TableTruck />
    </Box>
  )
}

export default TruckPage