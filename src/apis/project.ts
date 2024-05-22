import axios from "axios"

const baseURL = 'https://swe.dongwoo.win'

export const postProject = async ({title, accessToken}: {title: string; accessToken: string}) => {
  try{
    const response = await axios.post(`${baseURL}/projects`, {
      title: title,
    }, {
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

export const getProject = async ({accessToken}:{accessToken: string}) => {
  try{
    const response = await axios.get(`${baseURL}/projects`, 
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