import { useUser } from '@/hook/useUser';
import { Box, Button, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Content from './Content';
import Sub from './Sub';
import { createIssue, getIssue } from '@/apis/issue';

interface User {
  id: number;
  name: string;
};

interface Comment {
  id: number;
  commenter: User;
  content: string;
  createdAt: string;
};

interface Issue {
  id: number;
  title: string;
  description: string;
  reporter: User;
  assignee: User | null;
  fixer: User | null;
  reportedTime: string;
  status: string;
  priority: string;
  comments: Comment[];
};

const Issue = () => {
  const {setIssue, user, projectId, issueId, setIssueId} = useUser();
  const router = useRouter();
  const title = router.query.issue;
  const [content, setContent] = useState<string>('');
  const [edit, setEdit] = useState<boolean>(false);
  const [savedContent, setSavedContent] = useState<string>('');
  const [issueDetail, setIssueDetail] = useState<Issue>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleSave = async () => {
    setEdit(!edit);
    setSavedContent(content);
    const response = await createIssue({title: content, accessToken: user.accessToken, projectId});
    setIssueId(response.id);
    router.push(`/issue?issue=${content}`);
  };

  useEffect(()=>{
    const fetchData = async () => {
      const data = await getIssue({issueId, accessToken: user.accessToken});
      console.log(data);
      setIssueDetail(data);
    }

    if(title && typeof title === 'string'){
      setIssue(title);
    }else{
      setEdit(true);
    };
    fetchData();
  },[router.query, setIssue]);
  return (
    <Box sx={containerStyle}>
      {
        title &&
        <Box sx={titleStyle}>{title}</Box>
      }
      {
        edit &&
        <Box sx={titleStyle}>
          <TextField
            label="Write something"
            multiline
            rows={1}
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
      }
      <Box sx={{width: '80%', height: '1px', bgcolor: 'grey',}}/>
      <Box sx={issueContentStyle}>
        <Content description={issueDetail?.description || ""}/>
        <Sub/>
      </Box>
    </Box>
  )
}

export default Issue;

const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 4rem)',
  bgcolor: '#EEEEEE',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  padding: '5%',
  overflow: 'scroll',
};

const titleStyle = {
  width: '80%',
  fontSize: '40px',
  fontWeight: 'bold',
};

const issueContentStyle = {
  width: '80%',
  display: 'flex',
};


const textFieldStyle = {
  width: '50%',
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
