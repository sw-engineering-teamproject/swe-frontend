import { postProject } from '@/apis/project';
import { useUser } from '@/hook/useUser';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
interface LogoutModalProps {
  checkOpen: boolean;
  handleClose: () => void;
}

const CreateBox: React.FC<LogoutModalProps> = ({ checkOpen, handleClose }) => {
  const {addProject} = useUser();
  const [title, setTitle] = useState<string>('');
  const [reporter, setReporter] = useState<string>('');
  const accessToken = "123";
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleReporterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReporter(event.target.value);
  };
  const handleCreate = async() => {
    addProject({title: title, reporter: reporter});

    await postProject({title, reporter, accessToken});
    handleClose();
  }
  
  return (
    <Dialog open={checkOpen} onClose={handleClose}>
      <DialogTitle>{"Create New Project"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Create the new Project

          <Box sx={fieldBoxStyle}>
          Title
          <TextField sx={textFieldStyle} id='outlined-basic' label='Project Title' variant='outlined' onChange={handleTitleChange}/>
          </Box>

          <Box sx={fieldBoxStyle}>
          Reporter
          <TextField sx={textFieldStyle} id='outlined-basic' label='reporter' variant='outlined' onChange={handleReporterChange}/>
          </Box>

        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCreate}>Create</Button>
      </DialogActions>
    </Dialog>
  )
};
  

export default CreateBox;

const fieldBoxStyle = {
  width: '90%',
  marginTop: '10px',
}

const textFieldStyle = {
  width: '500px',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'red',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
  '& .MuiInputBase-input': {
    padding: '10px',

  },
  '& .MuiInputLabel-root': {
    transform: 'translate(14px, 14px) scale(1)',
    '&.MuiInputLabel-shrink': {
      transform: 'translate(14px, -15px) scale(0.75)',
    },
  },
};