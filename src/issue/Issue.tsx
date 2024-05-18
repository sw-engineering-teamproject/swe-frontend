import { useUser } from '@/hook/useUser';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import Content from './Content';
import Sub from './Sub';

const Issue = () => {
  const {setIssue} = useUser();
  const router = useRouter();
  const title = router.query.issue;
  useEffect(()=>{
    if(title && typeof title === 'string'){
      setIssue(title);
    }
  },[router.query, setIssue]);
  return (
    <Box sx={containerStyle}>
      <Box sx={titleStyle}>{title}</Box>
      <Box sx={{width: '80%', height: '1px', bgcolor: 'grey',}}/>
      <Box sx={issueContentStyle}>
        <Content/>
        <Sub/>
      </Box>
    </Box>
  )
}

export default Issue;

const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 4rem)',
  bgcolor: '#EEEEEE',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  padding: '5%',
  overflow: 'scroll',
};

const titleStyle = {
  width: '80%',
  fontSize: '40px',
  fontWeight: 'bold',
};

const issueContentStyle = {
  width: '80%',
  display: 'flex',
};