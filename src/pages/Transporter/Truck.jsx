import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { TableTruck } from '../../components'
import CreateTruck from '../../components/organisms/Truck/CreateTruck'

function TruckPage() {
  return (
    <Box
    p="15"
    m="10"
    backgroundColor='facebook.200'
    height="80vh">
      <h1>hhshdsahdj</h1>
      <Flex>
      <CreateTruck />
      </Flex>
        <TableTruck />
    </Box>
  )
}

export default TruckPage