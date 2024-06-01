import { useUser } from '@/hook/useUser';
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

const IssueBox = ({title, id}: {title: string, id: number}) => {
  const router = useRouter();
  const {project, setIssue, setIssueId} = useUser();
  const handleClick = () => {
    setIssue(title);
    setIssueId(id);
    router.push(`/issue?issue=${title}`);
  }
  return (
    <Box sx={containerStyle} onClick={handleClick}>
      {title}
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
  paddingLeft: '30px',
  marginBottom: '20px',

  fontSize: '20px',
  fontWeight: 'bold',

  cursor: 'pointer',
}