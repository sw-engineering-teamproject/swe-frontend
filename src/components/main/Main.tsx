import { Box, CardMedia, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProjectBox from './ProjectBox';
import { useRouter } from 'next/router';
import { useUser } from '@/hook/useUser';
import CreateBox from './CreateBox';
import { getProject } from '@/apis/project';

const Main = () => {
  const { projectList, user, setProjectList } = useUser();
  const router = useRouter();
  const [search, setSearch] = useState<string>('');
  const [checkOpen, setCheckOpen] = useState<boolean>(false);

  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {};

  const openCreateProject = () => {
    setCheckOpen(true);
  };

  const handleLogoutClose = () => {
    setCheckOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProject({ accessToken: user.accessToken });
      setProjectList(data);
    };
    fetchData();
  }, [user.accessToken, checkOpen]);

  return (
    <Box sx={containerStyle}>
      <Box sx={searchBoxStyle}>
        {user.accessToken ? (
          <>
            <Box sx={createStyle} onClick={openCreateProject}>
              Create
            </Box>
            <CreateBox checkOpen={checkOpen} handleClose={handleLogoutClose} />
          </>
        ) : (
          ''
        )}
      </Box>
      {user.accessToken ? (
        projectList?.map((project, index) => (
          <ProjectBox key={index} title={project.title} id={project.id} />
        ))
      ) : (
        <Box sx={signInStyle}>Sign In{'\n'}{'\n'} Please Click Profile Button</Box>
      )}
    </Box>
  );
};

export default Main;

const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 4rem)',
  bgcolor: '#EEEEEE',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  fontWeight: 'bold',
  fontSize: '22px',
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

const signInStyle = {
  whiteSpace: 'pre-line',
  textAlign: 'center',
};
