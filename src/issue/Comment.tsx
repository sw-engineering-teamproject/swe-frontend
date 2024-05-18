import { Box } from '@mui/material';
import React from 'react'

const Comment = () => {
  return (
    <Box sx={containerStyle}>
      <Box sx={headerStyle}>
        <Box>
        이름
        </Box>
        <Box>
        시간
        </Box>
      </Box>
      <Box>
        ㅎㅇㅎㅇ
      </Box>
    </Box>
  )
}

export default Comment;

const containerStyle = {
width: '95%',
minHeight: '150px',
marginTop: '30px',
display: 'flex',
flexDirection: 'column',
border: '1px solid',

gap: '5px',
};

const headerStyle = {
  width: '100%',
  height: '40px',
  bgcolor: 'black',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  borderRadius: '5px',
}
