import axios from "axios"

const baseURL = 'https://safeat.dongwoo.win/'

export const postLogin = async ({id, pw}: {id: string, pw: string}) => {
  try{
    const response = await axios.post(`${baseURL}/login`, {
      id: id,
      pw: pw,
    });
    return response.data;
  }catch(error){
    console.error(error);
  }
}