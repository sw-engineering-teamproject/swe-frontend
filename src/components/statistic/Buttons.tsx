import { Button, Grid } from '@mui/material';
import React, { useState } from 'react';

const Buttons = ({setCurrentButton}:{setCurrentButton: (filterType:string)=>void}) => {
  const [activeButton, setActiveButton] = useState<string | null>('day');

  const handleButtonClick = (filterType: string) => {
    console.log(`${filterType} button clicked`);
    setActiveButton(filterType);
    setCurrentButton(filterType);
    // Add logic to handle button click based on filterType
  };

  return (
    <Grid container spacing={2} sx={gridContainerStyle}>
      {['day', 'month', 'assignee', 'reporter', 'status', 'priority'].map((filterType) => (
        <Grid item xs={2} key={filterType}>
          <Button
            variant="contained"
            sx={activeButton === filterType ? activeButtonStyle : buttonStyle}
            onClick={() => handleButtonClick(filterType)}
          >
            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default Buttons;

const gridContainerStyle = {
  width: '80%',
  marginBottom: '20px',
};

const buttonStyle = {
  width: '100%',
  height: '50px',
  bgcolor: 'grey',
};

const activeButtonStyle = {
  width: '100%',
  height: '50px',
  bgcolor: 'blue',
};
