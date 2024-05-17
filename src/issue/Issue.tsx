import { useUser } from '@/hook/useUser';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

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
  };