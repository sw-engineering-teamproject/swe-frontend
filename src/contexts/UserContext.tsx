import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

export interface UserContextValues{
  user:{
    nickname: string;
    accessToken: string;
  };
  setNickname: (value: string) => void;
  setAccessToken: (value: string) => void;
  project: string,
  setProject: (value: string) => void;

};

const contextDefaultValue: UserContextValues = {
  user:{
    nickname: 'Junyewdd',
    accessToken: '',
  },
  setNickname: () => {},
  setAccessToken: () => {},
  project: '',
  setProject: () => {},
};

export const UserContext = createContext(contextDefaultValue);

export const UserProvider = ({children} : {children: ReactNode}) => {
  const [nickname, setNickname] = useState(contextDefaultValue.user.nickname);
  const [accessToken, setAccessToken] = useState(contextDefaultValue.user.accessToken);
  const [project, setProject] = useState(contextDefaultValue.project);

  useEffect(() => {
    contextDefaultValue.user.nickname = nickname;
    contextDefaultValue.user.accessToken = accessToken;
  }, [nickname]);

  return (
    <UserContext.Provider value={{user: {nickname, accessToken}, setNickname, setAccessToken, project, setProject}}>
      {children}
    </UserContext.Provider>
  )
};