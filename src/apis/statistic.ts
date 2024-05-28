import axios from "axios"

const baseURL = 'https://swe.dongwoo.win'

export const getStatisticsDay = async ({accessToken, projectId}:{accessToken: string, projectId: number}) => {
  try{
    const response = await axios.get(`${baseURL}/projects/${projectId}/statistics/day`, 
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

export const getStatisticsMonth = async ({accessToken, projectId}:{accessToken: string, projectId: number}) => {
  try{
    const response = await axios.get(`${baseURL}/projects/${projectId}/statistics/month`, 
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

export const getStatisticsAssignee = async ({accessToken, projectId}:{accessToken: string, projectId: number}) => {
  try{
    const response = await axios.get(`${baseURL}/projects/${projectId}/statistics/assignee`, 
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

export const getStatisticsReporter = async ({accessToken, projectId}:{accessToken: string, projectId: number}) => {
  try{
    const response = await axios.get(`${baseURL}/projects/${projectId}/statistics/reporter`, 
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

export const getStatisticsStatus = async ({accessToken, projectId}:{accessToken: string, projectId: number}) => {
  try{
    const response = await axios.get(`${baseURL}/projects/${projectId}/statistics/status`, 
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

export const getStatisticsPriority = async ({accessToken, projectId}:{accessToken: string, projectId: number}) => {
  try{
    const response = await axios.get(`${baseURL}/projects/${projectId}/statistics/priority`, 
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