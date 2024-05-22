import axios from "axios"

const baseURL = 'https://swe.dongwoo.win'

export const postProject = async ({title, reporter, accessToken}: {title: string, reporter: string, accessToken: string}) => {
  try{
    const response = await axios.post(`${baseURL}/projects`, {
      title: title,
      reporter: reporter,
    }, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    return response.data;
    // const data = "123";
    // return data;
  }catch(error){
    console.error(error);
  }
};