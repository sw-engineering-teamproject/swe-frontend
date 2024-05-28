import React, { useEffect, useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useUser } from '@/hook/useUser';
import { getStatisticsAssignee, getStatisticsDay, getStatisticsMonth, getStatisticsPriority, getStatisticsReporter, getStatisticsStatus } from '@/apis/statistic';
import Buttons from './Buttons';

interface StatisticsData {
  column: string;
  count: number;
}

const extractMonth = (dateString: string): string => {
  const parts = dateString.split('-');
  if (parts.length !== 3) {
    throw new Error('Invalid date format. Expected format: YYYY-MM-DD');
  }
  return parts[1];
};

const extractNickname = (userString: string): string => {
  const match = userString.match(/nickname=(.*?),/);
  return match ? match[1] : userString;
};

const Statistics = () => {
  const { user, projectId } = useUser();
  const [stats, setStats] = useState<StatisticsData[]>([]);
  const [currentButton, setCurrentButton] = useState<string>('day');

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        let data;
        if (currentButton === 'day') {
          data = await getStatisticsDay({ accessToken: user.accessToken, projectId });
        } else if (currentButton === 'month') {
          data = await getStatisticsMonth({ accessToken: user.accessToken, projectId });
          data = data.map((item: any) => ({
            column: extractMonth(item.column),
            count: item.count,
          }));
        } else if (currentButton === 'assignee') {
          data = await getStatisticsAssignee({ accessToken: user.accessToken, projectId });
          data = data.map((item: any) => ({
            column: extractNickname(item.column),
            count: item.count,
          }));
        } else if (currentButton === 'reporter') {
          data = await getStatisticsReporter({ accessToken: user.accessToken, projectId });
          data = data.map((item: any) => ({
            column: extractNickname(item.column),
            count: item.count,
          }));
        } else if (currentButton === 'status') {
          data = await getStatisticsStatus({ accessToken: user.accessToken, projectId });
        } else if (currentButton === 'priority') {
          data = await getStatisticsPriority({ accessToken: user.accessToken, projectId });
        }
        setStats(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStatistics();
  }, [user.accessToken, projectId, currentButton]);

  return (
    <Box sx={containerStyle}>
      <Buttons setCurrentButton={setCurrentButton} />
      <TableContainer component={Paper} sx={tableContainerStyle}>
        <Table>
          <TableHead sx={tableHeadStyle}>
            <TableRow>
              <TableCell>{currentButton}</TableCell>
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

const tableHeadStyle = {
  bgcolor: '#f0f0ff', // 원하는 색상으로 변경
};
