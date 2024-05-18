import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const CommentWrite = () => {
  const [edit, setEdit] = useState<boolean>(true);
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
      <Box sx={{ width: '100%', mx: 'auto', marginTop: '50px', fontWeight: 'bold', fontSize: '20px',}}>
        {edit &&
        <>
        Add a Comment
        <TextField
          label="Write something"
          multiline
          rows={5}
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
        
      </Box>
    );
}

export default CommentWrite;

const textFieldStyle = {
  marginTop: '10px',
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