import { Box, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CommentWrite from './CommentWrite';
import Comment from './Comment';
import { useUser } from '@/hook/useUser';
import { editIssueDescription } from '@/apis/issue';

interface ContentProps {
  description: string;
}

const Content: React.FC<ContentProps> = ({ description }) => {
  const { commentList } = useUser();
  const [content, setContent] = useState<string>(description);
  const [savedContent, setSavedContent] = useState<string>(description);
  const { issueId, user } = useUser();
  const [edit, setEdit] = useState<boolean>(issueId===-1?true:false);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleSave = async () => {
    if (edit) {
      const data = await editIssueDescription({ issueId, description: content, accessToken: user.accessToken });
      console.log(data);
    }
    setEdit(!edit);
    setSavedContent(content);
  };

  useEffect(() => {
    if(issueId!==-1){
      setContent(description);
      setSavedContent(description);
    }
  }, [description, issueId]);

  return (
    <Box sx={{ width: '100%', mx: 'auto' }}>
      {edit ? (
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
      ) : (
        <>
          <Box>{savedContent}</Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setEdit(true)}
            sx={{ ...saveStyle, mt: 2 }}
          >
            Edit
          </Button>
        </>
      )}
      {commentList.map((comment, index) => (
        <Comment key={index} commentContent={comment.content} time={comment.createdAt} name={comment.commenter.name} />
      ))}
      <CommentWrite />
    </Box>
  );
};

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
};
