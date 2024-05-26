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
    return response;
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
}