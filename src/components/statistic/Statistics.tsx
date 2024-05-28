import React, { useEffect, useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Button } from '@mui/material';
import { useUser } from '@/hook/useUser';
import { getStatisticsAssignee, getStatisticsDay, getStatisticsMonth, getStatisticsPriority, getStatisticsReporter, getStatisticsStatus } from '@/apis/statistic';
import Buttons from './Buttons';

interface StatisticsData {
  column: string;
  count: number;
}

const Statistics = () => {
  const { user, projectId } = useUser();
  const [stats, setStats] = useState<StatisticsData[]>([]);
  const [currentButton, setCurrentButton] = useState<string>('day');

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        if(currentButton === 'day'){
          const data = await getStatisticsDay({ accessToken: user.accessToken, projectId });
          setStats(data);
        }else if(currentButton === 'month'){
          const data = await getStatisticsMonth({ accessToken: user.accessToken, projectId });
          setStats(data);
        }else if(currentButton === 'assignee'){
          const data = await getStatisticsAssignee({ accessToken: user.accessToken, projectId });
          setStats(data);
        }else if(currentButton === 'reporter'){
          const data = await getStatisticsReporter({ accessToken: user.accessToken, projectId });
          setStats(data);
        }else if(currentButton === 'status'){
          const data = await getStatisticsStatus({ accessToken: user.accessToken, projectId });
          setStats(data);
        }else if(currentButton === 'priority'){
          const data = await getStatisticsPriority({ accessToken: user.accessToken, projectId });
          setStats(data);
        }
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchStatistics();
  }, [user.accessToken, projectId, currentButton]);

  return (
    <Box sx={containerStyle}>
      <Buttons setCurrentButton = {setCurrentButton}/>
      <TableContainer component={Paper} sx={tableContainerStyle}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Column</TableCell>
              <TableCell>Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stats.map((stat, index) => (
              <TableRow key={index}>
                <TableCell>{stat.column}</TableCell>
                <TableCell>{stat.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Statistics;

const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 4rem)',
  bgcolor: '#EEEEEE',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '100px',
  gap: '1rem',
};

const tableContainerStyle = {
  width: '80%',
};
