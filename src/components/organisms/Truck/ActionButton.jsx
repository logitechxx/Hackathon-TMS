import { MenuItem } from '@chakra-ui/react'
import React from 'react'
import { ButtonTable } from '../../molecules'
import CreateTruck from './CreateTruck'
import EditTruck from './EditTruck'

function ActionButton() {
  return (
    <ButtonTable>
        <MenuItem><EditTruck/></MenuItem>
        <MenuItem>Deactivate Unit</MenuItem>
    </ButtonTable>
  )
}

export default ActionButton