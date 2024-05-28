import React, { useEffect, useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useUser } from '@/hook/useUser';
import { getStatisticsDay } from '@/apis/statistic';

interface StatisticsData {
  column: string;
  count: number;
}

const Statistics = () => {
  const { user, projectId } = useUser();
  const [stats, setStats] = useState<StatisticsData[]>([]);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const data = await getStatisticsDay({ accessToken: user.accessToken, projectId });
        setStats(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStatistics();
  }, [user.accessToken, projectId]);

  return (
    <Box sx={containerStyle}>
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
