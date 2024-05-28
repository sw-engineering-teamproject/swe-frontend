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