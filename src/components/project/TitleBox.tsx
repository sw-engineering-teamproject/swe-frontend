import { useUser } from '@/hook/useUser';
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

const TitleBox = () => {
  return (
    <Box sx={containerStyle}>
      <Box sx={titleStyle}>
        Title
      </Box>
      <Box sx={detailStyle}>
        <Box sx={boxStyle}>
          Status
        </Box>
        <Box sx={boxStyle}>
          Reporter
        </Box>
        <Box sx={boxStyle}>
          Assignee
        </Box>
      </Box>
    </Box>
  )
}

export default TitleBox;

const containerStyle = {
  width: '50%',
  height: '70px',
  boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.10)',

  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
  justifyContent: 'space-between',

  fontSize: '15px',
  fontWeight: 'bold',

  cursor: 'pointer',
};

const titleStyle = {
  paddingLeft: '30px',
}

const detailStyle = {
  paddingRight: '30px',
  fontWeight: 'normal',
  gap: '30px',
  display: 'flex',
};

const boxStyle = {
  width: '60px',
  overflow: 'hidden',
}