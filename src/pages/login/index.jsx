import {Box, Button, Link, Text} from '@chakra-ui/react';
import React from 'react';
import './styles.css';

function Login() {
    return (
        <Box className="login">
            <Box className="login-header">
                <Box className="login-header-wrapper">
                    <Box className="login-title">Kargo TMS</Box>
                    <Box className="login-description">
                        Select your login as
                    </Box>
                    <Box className="login-buttons">
                        <Button colorScheme='facebook' size='lg'>Transporter</Button>
                        <Button colorScheme='linkedin' size='lg'>Shipper</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Login;
