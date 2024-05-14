import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

const ProjectBox = ({title}: {title: string}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/project?title=${title}`);
  }
  return (
    <Box sx={containerStyle} onClick={handleClick}>
      {title}
    </Box>
  )
}

export default ProjectBox;

const containerStyle = {
  width: '50%',
  height: '70px',
  bgcolor: 'white',
  boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.10)',

  display: 'flex',
  alignItems: 'center',
  paddingLeft: '30px',

  fontSize: '20px',
  fontWeight: 'bold',

  cursor: 'pointer',
}