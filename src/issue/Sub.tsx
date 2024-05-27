import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import SelectPerson from './SelectPerson';
import { getIssueStatusList } from '@/apis/issue';

interface User {
  id: number;
  name: string;
}

interface Comment {
  id: number;
  commenter: User;
  content: string;
  createdAt: string;
}

interface Issue {
  id: number;
  title: string;
  description: string;
  reporter: User;
  assignee: User | null;
  fixer: User | null;
  reportedTime: string;
  status: string;
  priority: string;
  comments: Comment[];
}

interface Info {
  infoName: string;
}

const Sub = ({ issueContent }: { issueContent: Issue | null }) => {
  const [statusList, setStatusList] = useState<Info[]>([]);
  const [assigneeList, setAssigneeList] = useState<Info[]>([]);
  const [rankList, setRankList] = useState<Info[]>([]);

  useEffect(() => {
    const fetchStatusList = async () => {
      try {
        const statusData = await getIssueStatusList();
        const formattedStatusData = statusData.map((status: {statusName: string}) => ({ infoName: status.statusName }));
        setStatusList(formattedStatusData || []);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchAssigneeList = async () => {
      // 여기에 API 호출을 통해 assignee 목록을 가져오는 로직을 추가하세요.
    };

    const fetchRankList = async () => {
      // 여기에 API 호출을 통해 rank 목록을 가져오는 로직을 추가하세요.
    };

    fetchStatusList();
    fetchAssigneeList();
    fetchRankList();
  }, []);

  return (
    <Box sx={subStyle}>
      <Box sx={containerStyle}>
        Assignee
        <SelectPerson infoList={assigneeList} label="Assignee" />
      </Box>
      <Box sx={containerStyle}>
        Status
        <SelectPerson infoList={statusList} label="Status" />
      </Box>
      <Box sx={containerStyle}>
        Rank
        <SelectPerson infoList={rankList} label="Rank" />
      </Box>
      <Box sx={containerStyle}>
        Fixer
        <Box sx={fixerStyle}>
          {!issueContent || issueContent?.fixer === null ? "NONE" : issueContent.fixer.name}
        </Box>
      </Box>
    </Box>
  );
};

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
};

const fixerStyle = {
  fontSize: '17px',
  fontWeight: 'normal',
  color: 'black',
};
