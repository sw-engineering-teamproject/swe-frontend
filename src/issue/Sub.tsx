import { Box } from '@mui/material';
import React from 'react'
import SelectPerson from './SelectPerson';

const Sub = () => {
  return (
    <Box sx={subStyle}>
      <Box sx={containerStyle}>
        Assignee
        <SelectPerson/>
      </Box>
      <Box sx={containerStyle}>
        status
        <SelectPerson/>
      </Box>
      <Box sx={containerStyle}>
        Rank
        <SelectPerson/>
      </Box>
      <Box sx={containerStyle}>
        Fixer
        <SelectPerson/>
      </Box>

    </Box>
  )
}

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
}