import { Box } from '@mui/material';
import React from 'react'

const Statistic = () => {
  return (
    <Box sx={containerStyle}>

    </Box>
  )
}

export default Statistic;

const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 4rem)',
  bgcolor: '#EEEEEE',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
};