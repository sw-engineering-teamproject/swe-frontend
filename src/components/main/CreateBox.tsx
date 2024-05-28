import { postProject } from '@/apis/project';
import { useUser } from '@/hook/useUser';
import { controlError } from '@/util/controlError';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import React, { useState } from 'react';

interface CreateBoxProps {
  checkOpen: boolean;
  handleClose: () => void;
  onCantCreate: (message: string) => void; // 콜백 함수로 에러 메시지 전달
}

const CreateBox: React.FC<CreateBoxProps> = ({ checkOpen, handleClose, onCantCreate }) => {
  const { user } = useUser();
  const [title, setTitle] = useState<string>('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleCreate = async () => {
    try {
      await postProject({ title, accessToken: user.accessToken });
      handleClose();
    } catch (error: any) {
      let errorMessage = 'An unknown error occurred';
      if (error.response) {
        errorMessage = controlError(error.response.data);
      }
      console.error(errorMessage);
      onCantCreate(errorMessage);
    }
  };

  return (
    <Dialog open={checkOpen} onClose={handleClose}>
      <DialogTitle>{"Create New Project"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Create the new Project
          <Box sx={fieldBoxStyle}>
            Title
            <TextField sx={textFieldStyle} id='outlined-basic' label='Project Title' variant='outlined' onChange={handleTitleChange} />
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCreate}>Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateBox;

const fieldBoxStyle = {
  width: '90%',
  marginTop: '10px',
};

const textFieldStyle = {
  width: '100%',
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
