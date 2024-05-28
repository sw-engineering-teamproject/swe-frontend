import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';

interface FilterProps {
  onFilterChange: (filter: string) => void;
}

const Filter = ({ onFilterChange }: FilterProps) => {
  const [filter, setFilter] = useState<string>('');

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);
    onFilterChange(selectedFilter);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="select-helper-label">Filter</InputLabel>
      <Select
        labelId="select-helper-label"
        id="select-helper"
        value={filter}
        label="Filter"
        onChange={handleChange}
      >
        <MenuItem value={'all'}>All</MenuItem>
        <MenuItem value={'assignee'}>Assignee</MenuItem>
        <MenuItem value={'reporter'}>Reporter</MenuItem>
        <MenuItem value={'issueStatus'}>Issue Status</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Filter;
