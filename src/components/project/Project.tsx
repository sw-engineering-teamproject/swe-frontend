import { useUser } from '@/hook/useUser';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const Project = () => {
  const {setProject} = useUser();
  const router = useRouter();
  const title = router.query.title;
  useEffect(()=>{
    if(title && typeof title === 'string'){
      setProject(title);
      console.log(title);
    }
  },[router.query, setProject])
  return (
    <Box sx={containerStyle}>

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