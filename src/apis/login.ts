import axios from "axios"

const baseURL = 'https://swe.dongwoo.win'

export const postLogin = async ({id, pw}: {id: string, pw: string}) => {
  try{
    const response = await axios.post(`${baseURL}/login`, {
      accountId: id,
      password: pw,
    });
    console.log(response);
    return response.data;

  }catch(error){
    console.error(error);
  }
};

export const postRegister = async ({id, pw, name, role}:{id: string, pw: string, name: string, role: string}) => {
  console.log(id, pw, name, role);
  try{
    const response = await axios.post(`${baseURL}/register`, {
      accountId: id,
      password: pw,
      nickName: name,
      roleName: role,
    });
    console.log(response);
    if(response.status === 200){
      return true;
    }else{
      return false;
    }

  }catch(error){
    console.error(error);
  }
};

export const isNicknameDuplicated = async (name: string) => {
  try{
    const response = await axios.post(`${baseURL}/users/nickname/check`, {
      nickname: name,
    });
    console.log(response);
    return response.data;
  }catch(error){
    console.error(error);
  }
};

export const getRoles = async () => {
  try {
    const response = await axios.get(`${baseURL}/users/role`);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching roles:', error);
    return [];
  }
};