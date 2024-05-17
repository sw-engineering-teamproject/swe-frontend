import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import React, { useState } from 'react'

const SelectPerson = () => {
  const [filterOpen, setFilterOpen] = useState<boolean>(false);

  const handleFilterOpen = () => {
    setFilterOpen(!filterOpen);
  };
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="select-helper-label">Filter</InputLabel>
        <Select
          labelId="select-helper-label"
          id="select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Assignee</MenuItem>
          <MenuItem value={20}>Status</MenuItem>
        </Select>
        {/* <FormHelperText>With label + helper text</FormHelperText> */}
      </FormControl>
    </div>
  )
}

export default SelectPerson;

const filterStyle = {
  width: '60px',
  height: '40px',
  bgcolor: 'white',
  color: 'black',
  borderRadius: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  cursor: 'pointer',
  margin: '10px',
};