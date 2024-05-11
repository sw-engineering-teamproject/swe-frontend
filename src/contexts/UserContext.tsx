import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

export interface UserContextValues{
  user:{
    nickname: string;
  };
  setNickname: (value: string) => void;
};

const contextDefaultValue: UserContextValues = {
  user:{
    nickname: '',
  },
setNickname: () => {},
};

export const UserContext = createContext(contextDefaultValue);

export const UserProvider = ({children} : {children: ReactNode}) => {
  const [nickname, setNickname] = useState(contextDefaultValue.user.nickname);

  useEffect(() => {
    contextDefaultValue.user.nickname = nickname;
  }, [nickname]);

  return (
    <UserContext.Provider value={{user: {nickname}, setNickname}}>
      {children}
    </UserContext.Provider>
  )
};