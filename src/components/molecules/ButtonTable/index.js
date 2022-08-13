import React, { useState, useEffect } from 'react'
import { Menu, MenuButton, MenuList, MenuGroup, Button, MenuItem } from '@chakra-ui/react'

function ButtonTable() {

    const role = localStorage.getItem("role")
    const [options, setOptions] = useState([])

    useEffect(() => {
        settingColor(role)
    }, [])

    function settingColor(role) {
        if (role == "Transporter"){
            setOptions(["Change details", "Deactivate unit"])
        } else if (role == "Shipper"){
            setOptions(["Allocate shipment", "Update status"])
        }
    }

    return (
        <Menu>
            <MenuButton as={ Button } colorScheme="teal" >
                Update
            </MenuButton>
            <MenuList>
                <MenuGroup>
                    {options.map((opt) => {
                        return (
                            <MenuItem>{ opt }</MenuItem>
                        );
                    })}
                </MenuGroup>
            </MenuList>
        </Menu>
    )
}

export default ButtonTable