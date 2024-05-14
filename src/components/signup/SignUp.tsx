import { Box } from '@mui/material';
import React from 'react'
import SignUpBox from './SignUpBox';

const SignUp = () => {


  return (
    <Box sx={containerStyle}>
      <SignUpBox/>

    </Box>
  )
}

export default SignUp;

const containerStyle = {
    width: '100%',
    height: 'calc(100vh - 4rem)',
    bgcolor: '#EEEEEE',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
  };