import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import SelectPerson from './SelectPerson';
import { getIssuePriorityList, getIssueStatusList, getUsers, getUsersRecommended } from '@/apis/issue';
import { useUser } from '@/hook/useUser';

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
  userId?: number;
}

const Sub = ({ issueContent, onReload, onError }: { issueContent: Issue | null, onReload: () => void, onError: (message: string) => void }) => {
  const { user, issueId } = useUser();
  const [statusList, setStatusList] = useState<Info[]>([]);
  const [assigneeList, setAssigneeList] = useState<Info[]>([]);
  const [rankList, setRankList] = useState<Info[]>([]);
  const [defaultAssignee, setDefaultAssignee] = useState<string>('');
  const [defaultStatus, setDefaultStatus] = useState<string>('');
  const [defaultRank, setDefaultRank] = useState<string>('');

  useEffect(() => {
    const fetchStatusList = async () => {
      try {
        const statusData = await getIssueStatusList();
        const formattedStatusData = statusData.map((status: { statusName: string }) => ({ infoName: status.statusName }));
        setStatusList(formattedStatusData || []);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchAssigneeList = async () => {
      try {
        const assigneeData = await getUsersRecommended({ accessToken: user.accessToken, issueId });
        const formattedAssigneeData = assigneeData.map((assignee: { id: number, name: string }) => ({ infoName: assignee.name, userId: assignee.id }));
        setAssigneeList(formattedAssigneeData || []);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchRankList = async () => {
      try {
        const rankData = await getIssuePriorityList();
        const formattedRankData = rankData.map((priority: { priorityName: string }) => ({ infoName: priority.priorityName }));
        setRankList(formattedRankData || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStatusList();
    fetchAssigneeList();
    fetchRankList();
  }, [user.accessToken]);

  useEffect(() => {
    setDefaultAssignee(issueContent?.assignee?.name || '');
    setDefaultStatus(issueContent?.status || '');
    setDefaultRank(issueContent?.priority || '');
  }, [issueContent]);

  return (
    <Box sx={subStyle}>
      <Box sx={containerStyle}>
        Assignee
        <SelectPerson
          infoList={assigneeList}
          label="Assignee"
          defaultValue={defaultAssignee}
          onChange={onReload}
          onError={onError}
        />
      </Box>
      <Box sx={containerStyle}>
        Status
        <SelectPerson
          infoList={statusList}
          label="Status"
          defaultValue={defaultStatus}
          onChange={onReload}
          onError={onError}
        />
      </Box>
      <Box sx={containerStyle}>
        Priority
        <SelectPerson
          infoList={rankList}
          label="Rank"
          defaultValue={defaultRank}
          onChange={onReload}
          onError={onError}
        />
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

const fixerStyle = {
  fontSize: '17px',
  fontWeight: 'normal',
  color: 'black',
};
