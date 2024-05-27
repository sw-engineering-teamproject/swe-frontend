import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';

interface Info {
  infoName: string;
}

interface SelectPersonProps {
  infoList: Info[];
  label: string;
}

const SelectPerson = ({ infoList, label }: SelectPersonProps) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id={`select-helper-label-${label}`}>{label}</InputLabel>
      <Select
        labelId={`select-helper-label-${label}`}
        id={`select-helper-${label}`}
        value={selectedValue}
        label={label}
        onChange={handleChange}
      >
        {(infoList || []).map((info, index) => (
          <MenuItem key={index} value={info.infoName}>
            {info.infoName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectPerson;
