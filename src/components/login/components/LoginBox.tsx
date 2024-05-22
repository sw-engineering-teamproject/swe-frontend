import { postLogin } from '@/apis/login';
import { useUser } from '@/hook/useUser';
import { Box, TextField } from '@mui/material'
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const LoginBox = () => {
  const router = useRouter();
  const {setAccessToken} = useUser();
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const handlePwChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPw(event.target.value);
  };

  const handleClick = async () => {
    const data = await postLogin({id, pw});
    if(data){
      console.log(data.token);
      setAccessToken(data.token);
      router.push('/');
    }
  };

  return (
    <Box sx={containerStyle}>
      <Box sx={titleStyle}>
        Sign In
      </Box>
      <Box sx={loginStyle}>
        ID
        <TextField sx={textFieldStyle} id='outlined-basic' label='ID' variant='outlined' onChange={handleIdChange}/>
        PassWord
        <TextField sx={textFieldStyle} id='outlined-basic' label='PW' variant='outlined' onChange={handlePwChange}/>
      </Box>
      <Box sx={buttonStyle} onClick={handleClick}>
        DONE
      </Box>
    </Box>
  )
}

export default LoginBox;

const containerStyle = {
  width: '50%',
  height: '50%',
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
  fontSize: '1.7rem',
  fontStyle: 'normal',
  fontWeight: 'bold',
  lineHeight: 'normal',
};

const loginStyle = {
  width: '60%',
  fontWeight: 'normal',
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
};

const textFieldStyle = {
  width: '100%',
  marginTop: '0.4rem',
  marginBottom: '1rem',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'red',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
  '& .MuiInputBase-input': {
    padding: '10px',

  },
  '& .MuiInputLabel-root': {
    transform: 'translate(14px, 14px) scale(1)',
    '&.MuiInputLabel-shrink': {
      transform: 'translate(14px, -15px) scale(0.75)',
    },
  },
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
};