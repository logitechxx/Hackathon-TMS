import { MenuItem } from '@chakra-ui/react'
import React from 'react'
import { ButtonTable } from '../../molecules'
import CreateTruck from './CreateTruck'

function ActionButton() {
  return (
    <ButtonTable>
        <MenuItem>Change Details</MenuItem>
        <MenuItem>Deactivate Unit</MenuItem>
    </ButtonTable>
  )
}

export default ActionButton