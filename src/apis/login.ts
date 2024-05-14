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
};

export const postRegister = async ({id, pw, name}:{id: string, pw: string, name: string}) => {
  try{
    const response = await axios.post(`${baseURL}/register`, {
      id: id,
      pw: pw,
      nickname: name,
    });
    return response.data;

  }catch(error){
    console.error(error);
  }
};