import { useUser } from '@/hook/useUser';
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

const IssueBox = ({title, id, status, reporter, assignee}: {title: string, id: number, status: string, reporter: string, assignee: string | null}) => {
  const router = useRouter();
  const {project, setIssue, setIssueId} = useUser();
  const handleClick = () => {
    setIssue(title);
    setIssueId(id);
    console.log(title);
    console.log(status);
    console.log(reporter);
    router.push(`/issue?issue=${title}`);
  }
  return (
    <Box sx={containerStyle} onClick={handleClick}>
      <Box sx={titleStyle}>
        {title}
      </Box>
      <Box sx={detailStyle}>
        <Box sx={boxStyle}>
        {status}
        </Box>
        <Box sx={boxStyle}>
        {reporter}
        </Box>
        <Box sx={boxStyle}>
        {assignee}
        </Box>
      </Box>
    </Box>
  )
}

export default IssueBox;

const containerStyle = {
  width: '100%',
  height: '70px',
  bgcolor: 'white',
  boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.10)',

  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
  justifyContent: 'space-between',

  fontSize: '20px',
  fontWeight: 'bold',

  cursor: 'pointer',
};

const titleStyle = {
  paddingLeft: '30px',
}

const detailStyle = {
  fontSize: '15px',
  paddingRight: '30px',
  fontWeight: 'normal',
  gap: '30px',
  display: 'flex',
};

const boxStyle = {
  width: '60px',
  overflow: 'hidden',
}