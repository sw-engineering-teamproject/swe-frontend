import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Comment from './Comment';
import { useUser } from '@/hook/useUser';
import { addIssueComment, getIssue } from '@/apis/issue';
import { formatDate } from '@/util/convertToTime';

const CommentWrite = () => {
  const {addComment, issueId, user, setCommentList, commentList } = useUser();
  const [edit, setEdit] = useState<boolean>(true);
  const [content, setContent] = useState<string>('');
  const [savedContent, setSavedContent] = useState<string>('');
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setContent(event.target.value);
    };
  
    const handleSave = async () => {
      setEdit(!edit);
      setSavedContent(content);
      const response = await addIssueComment({issueId, accessToken: user.accessToken, content});
      const created = new Date().toISOString();
      const newComment = {
        id: response.id,
        commenter: { id: 1, name: user.nickname },
        content: content,
        createdAt: formatDate(created),
      };
      addComment(newComment);
      setContent('');
    };
  
    return (
      <Box sx={{ width: '100%', mx: 'auto', marginTop: '50px', fontWeight: 'bold', fontSize: '20px',}}>
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