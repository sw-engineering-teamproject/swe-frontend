import axios from "axios";

const baseURL = 'https://swe.dongwoo.win'

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
    console.log(response);
    return response.data;
  }catch(error){
    console.error(error);
  }
};