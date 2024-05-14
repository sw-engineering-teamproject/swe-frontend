import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react'

const SignUpBox = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/signup');
  }
  return (
    <Box sx={containerStyle}>
      <Box sx={titleStyle}>
        First Visit?
      </Box>
      <Box sx={buttonStyle} onClick={handleClick}>
        Sign Up
      </Box>
    </Box>
  )
}

export default SignUpBox;

const containerStyle = {
  width: '40%',
  height: '15%',
  bgcolor: '#FFFFFF',
  borderRadius: '30px',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.20)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  };

const titleStyle = {
  width: '100%',
  height: '30%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',

  fontFamily: 'Inter',
  fontSize: '1.3rem',
  fontStyle: 'normal',
  fontWeight: 'bold',
  lineHeight: 'normal',
};

const buttonStyle = {
  width: '80px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  bgcolor: 'grey',
  color: 'white',
  fontWeight: 'bold',

  borderRadius: '10px',
  margin: '10px',
  cursor: 'pointer',

  '&:hover': {
    bgcolor: 'black',
  },
}