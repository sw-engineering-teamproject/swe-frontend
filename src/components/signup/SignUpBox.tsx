import { isNicknameDuplicated, postRegister, getRoles } from '@/apis/login';
import { Box, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import CanSignUpBox from './CanSignUp';
import DuplicationBox from './DuplicationBox';

const SignUpBox = () => {
  const router = useRouter();
  const [checkOpen, setCheckOpen] = useState<boolean>(false);
  const [cantOpen, setCantOpen] = useState<boolean>(false);
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [roles, setRoles] = useState<string[]>([]);
  const [duplicated, setDuplicated] = useState<boolean>(true);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await getRoles();
        setRoles(response.userRoleNames || []);
      } catch (error) {
        console.error('Error fetching roles:', error);
        setRoles([]);
      }
    };
    fetchRoles();
  }, []);

  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const handlePwChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPw(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleRoleChange = (event: SelectChangeEvent<string>) => {
    setRole(event.target.value as string);
  };

  const handleClick = async () => {
    if(duplicated === true){
      setCantOpen(true);
    }else{
      const success = await postRegister({id, pw, name, role});
      if(success){
        router.push('/login');
      }
    }
  };

  const handleLogoutClose = () => {
    setCheckOpen(false);
  };

  const handleCantClose = () => {
    setCantOpen(false);
  };

  const checkDuplication = async () => {
    const isDuplicated = await isNicknameDuplicated(name);
    setDuplicated(isDuplicated);
    setCheckOpen(true);
  };

  return (
    <Box sx={containerStyle}>
      <Box sx={titleStyle}>
        Sign Up
      </Box>
      <Box sx={loginStyle}>
        ID
        <TextField sx={textFieldStyle} id='outlined-basic' label='ID' variant='outlined' onChange={handleIdChange}/>
        PassWord
        <TextField sx={textFieldStyle} id='outlined-basic' label='PW' variant='outlined' onChange={handlePwChange}/>
        Nickname
        <Box sx={nicknameStyle}>
          <TextField sx={textFieldStyle} id='outlined-basic' label='Nickname' variant='outlined' onChange={handleNameChange}/>
          <Box sx={nicknameButtonStyle} onClick={checkDuplication}>
            중복 확인
          </Box>
        </Box>
        Role
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id='role-select-label'>Role</InputLabel>
          <Select
            labelId='role-select-label'
            id='role-select'
            value={role}
            label='Role'
            onChange={handleRoleChange}
          >
            {roles.map((roleItem, index) => (
              <MenuItem key={index} value={roleItem}>
                {roleItem}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={buttonStyle} onClick={handleClick}>
        DONE
      </Box>
      <DuplicationBox checkOpen={checkOpen} handleClose={handleLogoutClose} isDuplicated={duplicated}/>
      <CanSignUpBox checkOpen={cantOpen} handleClose={handleCantClose} isDuplicated={duplicated}/>
    </Box>
  )
}

export default SignUpBox;

const containerStyle = {
  width: '50%',
  height: '70%',
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

const nicknameStyle = {
  display: 'flex',
  alignItems: 'center',
};

const nicknameButtonStyle = {
  width: '80px',
  height: '30px',
  bgcolor: 'grey',
  borderRadius: '500px',
  margin: '10px',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '11px',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    bgcolor: 'black',
    cursor: 'pointer',
  },
};
