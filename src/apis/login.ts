import axios from "axios"

const baseURL = 'https://swe.dongwoo.win'

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

export const postRegister = async ({id, pw, name, role}:{id: string, pw: string, name: string, role: string}) => {
  try{
    const response = await axios.post(`${baseURL}/register`, {
      id: id,
      pw: pw,
      nickname: name,
      role: role,
    });
    console.log(response);
    return response.data;

  }catch(error){
    console.error(error);
  }
};

export const isNicknameDuplicated = async (name: string) => {
  try{
    const response = await axios.post(`${baseURL}/register/nickname`, {
      nickname: name,
    });
    return response.data;
  }catch(error){
    console.error(error);
  }
}