import { useUser } from '@/hook/useUser'
import { Box, CardMedia } from '@mui/material'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Header = () => {
  const {user, project, setProject, issue, setIssue} = useUser();
  const router = useRouter();
  const [title, setTitle] = useState<string>('');

  const gotoLogin = () => {
    if(user.nickname === ''){
      router.push('/login');
    }
  }
  const gotoHome = () => {
    setProject(``);
    setIssue('');
    router.push('/');
  };

  useEffect(() => {
    if(issue!==''){
      setTitle(`${user.nickname}/${project}/${issue}`);
    } else if (project !== '') {
      setTitle(`${user.nickname}/${project}`);
    } else {
      setTitle(`${user.nickname}`);
    }
  }, [project, user.nickname, issue]);
  return (
    <Box sx={headerStyle}>
      <Box sx={leftStyle}>
        <CardMedia
          component="img"
          image={'/images/logo.png'}
          title="profile"
          sx={logoStyle}
          onClick={gotoHome}
        />
        <Box sx={titleStyle}>
          {title}
        </Box>
      </Box>

      <CardMedia
          component="img"
          image={'/images/profile.png'}
          title="profile"
          sx={profileStyle}
          onClick={gotoLogin}
        />
    </Box>
  )
}

export default Header;

const headerStyle = {
  width: '100%', 
  height: '4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  
};

const leftStyle = {
  marginLeft: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.7rem',
};

const logoStyle = {
width: '50px',
height: '50px',
};

const titleStyle = {
  fontFamily: 'Inter',
  fontSize: '1.7rem',
  fontStyle: 'normal',
  fontWeight: 'bold',
  lineHeight: 'normal',
};

const profileStyle = {
  width: '50px',
  height: '50px',
  marginRight: '1rem',
}