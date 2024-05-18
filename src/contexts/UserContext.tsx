import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

export interface CommentProps {
  commentContent: string;
  time?: string;
  name?: string;
};

export interface UserContextValues{
  user:{
    nickname: string;
    accessToken: string;
  };
  setNickname: (value: string) => void;
  setAccessToken: (value: string) => void;
  project: string,
  setProject: (value: string) => void;
  issue: string,
  setIssue: (value: string) => void;
  commentList: CommentProps[];
  setCommentList: Dispatch<SetStateAction<CommentProps[]>>;
  addComment: (comment: CommentProps) => void;

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
  issue: '',
  setIssue: () => {},
  commentList: [{commentContent: 'hi hi', time: '23,07.17.', name: '영은',}, {commentContent: 'hi hi', time: '23,07.17.', name: '영은',}],
  setCommentList: () => {},
  addComment: () => {},
};

export const UserContext = createContext(contextDefaultValue);

export const UserProvider = ({children} : {children: ReactNode}) => {
  const [nickname, setNickname] = useState(contextDefaultValue.user.nickname);
  const [accessToken, setAccessToken] = useState(contextDefaultValue.user.accessToken);
  const [project, setProject] = useState(contextDefaultValue.project);
  const [issue, setIssue] = useState(contextDefaultValue.issue);
  const [commentList, setCommentList] = useState<CommentProps[]>(contextDefaultValue.commentList);

  const addComment = (comment: CommentProps) => {
    setCommentList((prev) => [...prev, comment]);
  };

  useEffect(() => {
    contextDefaultValue.user.nickname = nickname;
    contextDefaultValue.user.accessToken = accessToken;
  }, [nickname]);

  return (
    <UserContext.Provider value={{user: {nickname, accessToken}, setNickname, setAccessToken, project, setProject, issue, setIssue, commentList, setCommentList, addComment}}>
      {children}
    </UserContext.Provider>
  )
};