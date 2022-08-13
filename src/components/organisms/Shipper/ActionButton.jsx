import { MenuItem } from '@chakra-ui/react'
import React from 'react'
import { ButtonTable } from '../../molecules'
import AllocateShipment from './AllocateShipment'
import ShipmentStatus from './ShipmentStatus'

function ActionButton() {
    return (
        <ButtonTable>
            <MenuItem><AllocateShipment/></MenuItem>
            <MenuItem><ShipmentStatus/></MenuItem>
        </ButtonTable>
    )
}

export default ActionButton