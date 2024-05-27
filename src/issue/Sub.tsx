import { Box } from '@mui/material';
import React from 'react';
import SelectPerson from './SelectPerson';

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

const Sub = ({ issueContent }: { issueContent: Issue | null }) => {
  return (
    <Box sx={subStyle}>
      <Box sx={containerStyle}>
        Assignee
        <SelectPerson />
      </Box>
      <Box sx={containerStyle}>
        status
        <SelectPerson />
      </Box>
      <Box sx={containerStyle}>
        Rank
        <SelectPerson />
      </Box>
      <Box sx={containerStyle}>
        Fixer
        <Box sx={fixerStyle}>
          {issueContent?.fixer === null ? "NONE" : issueContent.fixer.name}
        </Box>
      </Box>
    </Box>
  );
};

export default Sub;

const subStyle = {
  width: '20%',
  height: '30px',
  marginLeft: '10px',
};

const containerStyle = {
  marginBottom: '10px',
  fontWeight: 'bold',
  fontSize: '22px',
};

const personSelectStyle = {
  width: '70%',
  height: '30px',
  bgcolor: 'grey',
};

const fixerStyle = {
  fontSize: '17px',
  fontWeight: 'normal',
  color: 'black',
};