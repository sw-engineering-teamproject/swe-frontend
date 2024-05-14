import { Box } from '@mui/material'
import React from 'react'
import LoginBox from './components/LoginBox';
import SignUpBox from './components/SignUpBox';

const Login = () => {
  return (
    <Box sx={containerStyle}>
      <LoginBox/>
      <SignUpBox/>
    </Box>
  )
}

export default Login;

const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 4rem)',
  bgcolor: '#EEEEEE',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
}