import { useUser } from '@/hook/useUser';
import { Box, CardMedia, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import CreateBox from './CreateBox';
import IssueBox from './IssueBox';
import Filter from './Filter';

const Project = () => {
  const {setProject} = useUser();
  const router = useRouter();
  const title = router.query.title;
  const [search, setSearch] = useState<string>('');
  const [checkOpen, setCheckOpen] = useState<boolean>(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {

  };

  const openCreateProject = () => {
    setCheckOpen(true);
  };

  const handleLogoutClose = () => {
    setCheckOpen(false);
  };

  useEffect(()=>{
    if(title && typeof title === 'string'){
      setProject(title);
    }
  },[router.query, setProject])
  return (
    <Box sx={containerStyle}>
      <Box sx={searchBoxStyle}>
      <Filter/>
      <TextField sx={textFieldStyle} id='outlined-basic' label='search...' variant='outlined' onChange={handleSearchChange}/>
      <CardMedia
        component="img"
        image={'/images/search.png'}
        title="profile"
        sx={searchStyle}
        onClick={handleSearch}
        />
        <Box sx={createStyle} onClick={openCreateProject}>
          Create
        </Box>
        <CreateBox checkOpen={checkOpen} handleClose={handleLogoutClose}/>
    </Box>

    <IssueBox title={'Issue_1'}/>
    <IssueBox title={'Issue_2'}/>
    </Box>
  )
}

export default Project;

const containerStyle = {
    width: '100%',
    height: 'calc(100vh - 4rem)',
    bgcolor: '#EEEEEE',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  };

const textFieldStyle = {
  width: '500px',
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
  
const searchStyle = {
  width: '30px',
  height: '30px',
  margin: '3px',
};
  
const searchBoxStyle = {
  display: 'flex',
  height: '50px',
  marginTop: '3rem',
  marginBottom: '1rem',
  alignItems: 'center',
};

const createStyle = {
  width: '70px',
  height: '50px',
  bgcolor: 'green',
  color: 'white',
  borderRadius: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  cursor: 'pointer',
};