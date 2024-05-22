import { Project } from "next/dist/build/swc";
import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

export interface CommentProps {
  commentContent: string;
  time?: string;
  name?: string;
};

export interface ProjectProps {
  title: string;
  reporter?: string;
}

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

  projectList: ProjectProps[];
  setProjectList: Dispatch<SetStateAction<ProjectProps[]>>;
  addProject: (project: ProjectProps) => void;
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
  commentList: [{commentContent: 'hi hi', time: '23,07.17.', name: '영은',}, {commentContent: 'ki ki ku ku', time: '23,12.25.', name: '영은',}],
  setCommentList: () => {},
  addComment: () => {},
  // projectList: [{title: 'project_5', reporter: 'Junye'}, {title: 'project_2', reporter: 'hihi'}],
  projectList: [],
  setProjectList: () => {},
  addProject: () => {},
};

export const UserContext = createContext(contextDefaultValue);

export const UserProvider = ({children} : {children: ReactNode}) => {
  const [nickname, setNickname] = useState(contextDefaultValue.user.nickname);
  const [accessToken, setAccessToken] = useState(contextDefaultValue.user.accessToken);
  const [project, setProject] = useState(contextDefaultValue.project);
  const [issue, setIssue] = useState(contextDefaultValue.issue);
  const [commentList, setCommentList] = useState<CommentProps[]>(contextDefaultValue.commentList);
  const [projectList, setProjectList] = useState<ProjectProps[]>(contextDefaultValue.projectList);

  const addComment = (comment: CommentProps) => {
    setCommentList((prev) => [...prev, comment]);
  };

  const addProject = (project: ProjectProps) => {
    setProjectList((prev) => [...prev, project]);
  };

  useEffect(() => {
    contextDefaultValue.user.nickname = nickname;
    contextDefaultValue.user.accessToken = accessToken;
  }, [nickname]);

  return (
    <UserContext.Provider value={{user: {nickname, accessToken}, setNickname, setAccessToken, project, setProject, issue, setIssue, commentList, setCommentList, addComment, projectList, setProjectList, addProject}}>
      {children}
    </UserContext.Provider>
  )
};