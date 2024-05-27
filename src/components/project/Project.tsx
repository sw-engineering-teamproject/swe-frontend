import { useUser } from '@/hook/useUser';
import { Box, CardMedia, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CreateBox from './CreateBox';
import IssueBox from './IssueBox';
import Filter from './Filter';
import { getIssueList } from '@/apis/issue';

const Project = () => {
  const { setProject, issueList, setIssueList, user, projectId } = useUser();
  const router = useRouter();
  const title = router.query.title;
  const [searchContent, setSearchContent] = useState<string>('');
  const [checkOpen, setCheckOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>('');

  const handleIssueChange = (event: SelectChangeEvent<string>) => {
    setSearchContent(event.target.value);
  };

  const handleSearch = () => {
    if (searchContent) {
      router.push(`/issue?issue=${searchContent}`);
    }
  };

  const openCreateProject = () => {
    router.push(`/issue`);
  };

  const handleLogoutClose = () => {
    setCheckOpen(false);
  };

  const handleFilterChange = (selectedFilter: string) => {
    setFilter(selectedFilter);
  };

  useEffect(() => {
    if (title && typeof title === 'string') {
      setProject(title);
    }
  }, [router.query, setProject]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getIssueList({ accessToken: user.accessToken, projectId });
      console.log(data);
      setIssueList(data);
    };
    fetchData();
  }, [user.accessToken, checkOpen]);

  return (
    <Box sx={containerStyle}>
      <Box sx={searchBoxStyle}>
        <Filter onFilterChange={handleFilterChange}/>
        <FormControl sx={selectStyle}>
          <InputLabel id="select-issue-label">Select Issue</InputLabel>
          <Select
            labelId="select-issue-label"
            id="select-issue"
            value={searchContent}
            label="Select Issue"
            onChange={handleIssueChange}
          >
            {issueList?.map((issue) => (
              <MenuItem key={issue.id} value={issue.title}>
                {issue.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <CardMedia
          component="img"
          image={'/images/search.png'}
          title="search"
          sx={searchStyle}
          onClick={handleSearch}
        />
        <Box sx={createStyle} onClick={openCreateProject}>
          Create
        </Box>
        <CreateBox checkOpen={checkOpen} handleClose={handleLogoutClose} />
      </Box>

      {issueList?.map((issue, index) => (
        <IssueBox key={index} title={issue.title} id={issue.id} />
      ))}
    </Box>
  );
};

export default Project;

const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 4rem)',
  bgcolor: '#EEEEEE',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
};

const textFieldStyle = {
  width: '50%',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'red',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
  '& .MuiInputBase-input': {
    padding: '10px',
  },
  '& .MuiInputLabel-root': {
    transform: 'translate(14px, 14px) scale(1)',
    '&.MuiInputLabel-shrink': {
      transform: 'translate(14px, -15px) scale(0.75)',
    },
  },
};

const searchStyle = {
  width: '30px',
  height: '30px',
  margin: '3px',
  cursor: 'pointer',
};

const searchBoxStyle = {
  display: 'flex',
  width: '50%',
  height: '50px',
  marginTop: '3rem',
  marginBottom: '1rem',
  alignItems: 'center',
};

const createStyle = {
  width: '70px',
  height: '50px',
  bgcolor: 'green',
  color: 'white',
  borderRadius: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const selectStyle = {
  minWidth: '100px',
  width: '100%',
};
