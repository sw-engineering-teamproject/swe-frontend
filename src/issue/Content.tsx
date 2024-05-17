import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Content = () => {
  const [edit, setEdit] = useState<boolean>(true);
  const [content, setContent] = useState<string>('');
  const [savedContent, setSavedContent] = useState<string>('');
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setContent(event.target.value);
    };
  
    const handleSave = () => {
      console.log(content);
      setSavedContent(content);
    };
  
    return (
      <Box sx={{ width: '100%', mx: 'auto' }}>
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
        {/* {savedContent && (
          <Box mt={2}>
            <h3>Saved Content:</h3>
            <p>{savedContent}</p>
          </Box>
        )} */}
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