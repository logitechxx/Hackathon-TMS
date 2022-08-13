import React, { useState, useEffect } from 'react'
import { Menu, MenuButton, MenuList, MenuGroup, Button, MenuItem } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

function Profile() {

    const role = localStorage.getItem("role")
    const [color, setColor] = useState("")

    console.log(role)

    useEffect(() => {
        settingColor(role)
    }, [])

    function settingColor(role) {
        if (role == "Transporter"){
            setColor("facebook")
        } else if (role == "Shipper"){
            setColor("linkedin")
        }
    }

    const navigate = useNavigate()
    function handleLogout() {
        localStorage.removeItem("role")
        navigate('/')
    }

    return (
        <Menu>
            <MenuButton as={ Button } colorScheme={ color }>
                { role }
            </MenuButton>
            <MenuList>
                <MenuGroup>
                    <MenuItem onClick={handleLogout}>Log out</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    )
}

export default Profile