import { Box } from '@mui/material';
import React from 'react'

interface CommentProps {
  commentContent: string;
  time?: string;
  name?: string;
}

const Comment: React.FC<CommentProps>  = ({commentContent, time, name}) => {
  return (
    <Box sx={containerStyle}>
      <Box sx={headerStyle}>
        <Box>
        {name}
        </Box>
        <Box>
        {time}
        </Box>
      </Box>
      <Box>
        {commentContent}
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
bgcolor: 'white',
gap: '5px',
borderRadius: '5px',
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
