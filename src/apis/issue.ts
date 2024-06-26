import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const getIssueList = async ({accessToken, projectId}:{accessToken: string, projectId: number}) => {
  try{
    const response = await axios.get(`${baseURL}/issues?projectId=${projectId}`, 
    {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    return response.data;

  }catch(error){
    console.error(error);
  }
};

export const createIssue = async ({title, accessToken, projectId} : {title: string, accessToken: string, projectId: number}) =>{
  try{
    const response = await axios.post(`${baseURL}/issues`, 
    {
      title: title,
      description: "",
      projectId: projectId,
    },
    {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    return response.data;
  }catch(error){
    console.error(error);
  }
};

export const getIssue = async ({issueId, accessToken}:{issueId: number, accessToken: string}) => {
  try{
    const response = await axios.get(`${baseURL}/issues/${issueId}`, 
    {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    return response.data;

  }catch(error){
    console.error(error);
  }
};

export const editIssueDescription = async ({issueId, description, accessToken}:{issueId: number, description: string, accessToken: string}) => {
  try{
    const response = await axios.post(`${baseURL}/issues/${issueId}/description`, {
      newDescription: description,
    },
    {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    return response.data;

  }catch(error){
    console.error(error);
  }
};

export const addIssueComment = async ({issueId, accessToken, content}: {issueId: number, accessToken: string, content: string}) => {
  try{
    const response = await axios.post(`${baseURL}/issues/${issueId}/comments`, 
    {
      content: content,
    },
    {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    return response.data;
  }catch(error){
    console.error(error);
  }
};

export const getIssueStatusList = async () => {
  try{
    const response = await axios.get(`${baseURL}/issues/status`);
    return response.data;
  }catch(error){
    console.error(error);
  }
};

export const getIssuePriorityList = async () => {
  try{
    const response = await axios.get(`${baseURL}/issues/priority`);
    return response.data;
  }catch(error){
    console.error(error);
  }
};

export const editIssuePriority = async ({issueId, priority, accessToken}: {issueId: number, priority: string, accessToken: string}) => {
  try{
    const response = await axios.post(`${baseURL}/issues/${issueId}/priority`, 
    {
      priority: priority,
    },
    {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    return response.data;
  }catch(error){
    throw error;
  }
};

export const editIssueStatus = async ({issueId, status, accessToken}: {issueId: number, status: string, accessToken: string}) => {
  try{
    const response = await axios.post(`${baseURL}/issues/${issueId}/status`, 
    {
      status: status,
    },
    {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    return response.data;
  }catch(error){
    throw error;
  }
};

export const editIssueAssignee = async ({issueId, assignee, accessToken}: {issueId: number, assignee: number, accessToken: string}) => {
  try{
    const response = await axios.post(`${baseURL}/issues/${issueId}/assignee`, 
    {
      assigneeId: assignee,
    },
    {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    return response.data;
  }catch(error){
    throw error;
  }
};

export const getUsers = async ({accessToken}: {accessToken: string}) => {
  try{
    const response = await axios.get(`${baseURL}/users`,
    {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    return response.data;
  }catch(error){
    console.error(error);
  }
};

export const getUsersRecommended = async ({accessToken, issueId}: {accessToken: string, issueId: number}) => {
  try{
    const response = await axios.get(`${baseURL}/Issues/${issueId}/recommend`,
    {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    return response.data;
  }catch(error){
    console.error(error);
  }
};