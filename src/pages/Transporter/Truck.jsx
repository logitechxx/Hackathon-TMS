import { Box } from '@chakra-ui/react'
import React from 'react'
import { TableTruck } from '../../components'
import CreateTruck from '../../components/organisms/Truck/CreateTruck'

function TruckPage() {
  return (
    <Box
    p="15"
    m="10"
    backgroundColor='facebook.200'>
      <h1>hhshdsahdj</h1>
        <TableTruck />
        <CreateTruck />
    </Box>
  )
}

export default TruckPage