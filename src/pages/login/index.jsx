import {Box, Button, Link, Text} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Login() {

    const navigate = useNavigate()
    const handleLoginTransporter = () => {
        localStorage.setItem('role', "Transporter")
        navigate('/transporter')   
    }
    const handleLoginShipper= () => {
        localStorage.setItem('role', "Shipper")
        navigate('/shipper')   
    }


    return (
        <Box className="login" backgroundColor={"#282c34"}>
            <Box className="login-header">
                <Box className="login-header-wrapper">
                    <Box className="login-title">Kargo TMS</Box>
                    <Box className="login-description">
                        Select your login as
                    </Box>
                    <Box className="login-buttons">
                        <Button colorScheme='facebook' 
                        size='lg' onClick={handleLoginTransporter}>Transporter</Button>
                        <Button colorScheme='linkedin' size='lg' onClick={handleLoginShipper}>Shipper</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Login;
