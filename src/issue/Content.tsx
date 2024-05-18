import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import CommentWrite from './CommentWrite';
import Comment from './Comment';

const Content = () => {
  const [edit, setEdit] = useState<boolean>(false);
  const [content, setContent] = useState<string>('');
  const [savedContent, setSavedContent] = useState<string>('');
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setContent(event.target.value);
    };
  
    const handleSave = () => {
      setEdit(!edit);
      setSavedContent(content);
    };
  
    return (
      <Box sx={{ width: '100%', mx: 'auto' }}>
        {edit &&
        <>
        <TextField
          label="Write something"
          multiline
          rows={17}
          variant="outlined"
          fullWidth
          value={content}
          onChange={handleChange}
          sx={textFieldStyle}
        />
        <Button
          variant="contained" 
          color="primary" 
          onClick={handleSave}
          sx={{ ...saveStyle, mt: 2 }}
        >
          Save
        </Button>
        </>
        }
        {!edit &&
          <>
          <Box>
            {savedContent}
          </Box>
          <Button
          variant="contained" 
          color="primary" 
          onClick={handleSave}
          sx={{ ...saveStyle, mt: 2 }}
          >
            Edit
          </Button>
          </>
        }
        
        <Comment/>
        <CommentWrite/>
      </Box>
    );
}

export default Content;

const textFieldStyle = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
};

const saveStyle = {
  bgcolor: 'black',
}