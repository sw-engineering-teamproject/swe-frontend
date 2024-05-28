import { editIssueAssignee, editIssuePriority, editIssueStatus } from '@/apis/issue';
import { useUser } from '@/hook/useUser';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useState, useEffect } from 'react';

interface Info {
  infoName: string;
  userId?: number;
}

interface SelectPersonProps {
  infoList: Info[];
  label: string;
  defaultValue: string;
  userId?: number;
}

const SelectPerson = ({ infoList, label, defaultValue, userId }: SelectPersonProps) => {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);
  const { user, issueId } = useUser();

  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [defaultValue]);

  const handleChange = async (event: SelectChangeEvent) => {
    const value = event.target.value;
    setSelectedValue(value);
    
    const selectedInfo = infoList.find(info => info.infoName === value);

    if (label === "Rank") {
      await editIssuePriority({ issueId, priority: value, accessToken: user.accessToken });
    } else if (label === "Status") {
      await editIssueStatus({ issueId, status: value, accessToken: user.accessToken });
    } else if (label === "Assignee" && selectedInfo?.userId) {
      await editIssueAssignee({ issueId, assignee: selectedInfo.userId, accessToken: user.accessToken });
    }
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
