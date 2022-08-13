import React, { useState, useEffect } from 'react'
import { Menu, MenuButton, MenuList, MenuGroup, Button, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

function ButtonTable({children}) {

    // const role = localStorage.getItem("role")
    // const [options, setOptions] = useState([])

    // useEffect(() => {
    //     settingColor(role)
    // }, [])

    // function settingColor(role) {
    //     if (role == "Transporter"){
    //         setOptions(["Change details", "Deactivate unit"])
    //     } else if (role == "Shipper"){
    //         setOptions(["Allocate shipment", "Update status"])
    //     }
    // }

    return (
        <Menu>
            <MenuButton as={ Button } colorScheme="teal" rightIcon={<ChevronDownIcon />}>
                Update
            </MenuButton>
            <MenuList>
                {children}
            </MenuList>
        </Menu>
    )
}

export default ButtonTable