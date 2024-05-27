import { Project } from "next/dist/build/swc";
import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

interface CommentProps {
  id: number;
  commenter: User;
  content: string;
  createdAt: string;
}

export interface ProjectProps {
  id: number;
  title: string;
  reporterName: string;
  assigneeName: string | null;
  issueStatus: string;
}

export interface IssueProps {
  id: number;
  title: string;
  reporter?: string;
}

export interface UserContextValues{
  user:{
    nickname: string;
    accessToken: string;
    userId: number;
  };
  setNickname: (value: string) => void;
  setAccessToken: (value: string) => void;
  setUserId: (value: number) => void;
  project: string,
  projectId: number,
  setProjectId: (value: number) => void;
  setProject: (value: string) => void;
  issue: string,
  setIssue: (value: string) => void;
  issueId: number,
  setIssueId: (value: number) => void;

  commentList: CommentProps[];
  setCommentList: Dispatch<SetStateAction<CommentProps[]>>;
  addComment: (comment: CommentProps) => void;

  projectList: ProjectProps[];
  setProjectList: Dispatch<SetStateAction<ProjectProps[]>>;
  addProject: (project: ProjectProps) => void;

  issueList: IssueProps[];
  setIssueList: Dispatch<SetStateAction<IssueProps[]>>;
  addIssue: (issue: IssueProps) => void;
};


const contextDefaultValue: UserContextValues = {
  user:{
    nickname: '',
    accessToken: '',
    userId: -1,
  },
  setNickname: () => {},
  setAccessToken: () => {},
  setUserId: () => {},
  project: '',
  setProject: () => {},
  projectId: -1,
  setProjectId: () => {},
  issue: '',
  setIssue: () => {},
  issueId: -1,
  setIssueId: () => {},
  // commentList: [{commentContent: 'hi hi', time: '23,07.17.', name: '영은',}, {commentContent: 'ki ki ku ku', time: '23,12.25.', name: '영은',}],
  commentList: [],
  setCommentList: () => {},
  addComment: () => {},
  // projectList: [{title: 'project_5', reporter: 'Junye'}, {title: 'project_2', reporter: 'hihi'}],
  projectList: [],
  setProjectList: () => {},
  addProject: () => {},
  issueList: [],
  setIssueList: () => {},
  addIssue: () => {},
};

export const UserContext = createContext(contextDefaultValue);

export const UserProvider = ({children} : {children: ReactNode}) => {
  const [nickname, setNickname] = useState(contextDefaultValue.user.nickname);
  const [accessToken, setAccessToken] = useState(contextDefaultValue.user.accessToken);
  const [userId, setUserId] = useState(contextDefaultValue.user.userId);
  const [project, setProject] = useState(contextDefaultValue.project);
  const [issue, setIssue] = useState(contextDefaultValue.issue);
  const [commentList, setCommentList] = useState<CommentProps[]>(contextDefaultValue.commentList);
  const [projectList, setProjectList] = useState<ProjectProps[]>(contextDefaultValue.projectList);
  const [issueList, setIssueList] = useState<IssueProps[]>(contextDefaultValue.issueList);
  const [projectId, setProjectId] = useState(contextDefaultValue.projectId);
  const [issueId, setIssueId] = useState(contextDefaultValue.issueId);

  const addComment = (comment: CommentProps) => {
    setCommentList((prev) => [...prev, comment]);
  };

  const addProject = (project: ProjectProps) => {
    setProjectList((prev) => [...prev, project]);
  };

  const addIssue = (issue: IssueProps) => {
    setIssueList((prev) => [...prev, issue]);
  };

  useEffect(() => {
    contextDefaultValue.user.nickname = nickname;
    contextDefaultValue.user.accessToken = accessToken;
    contextDefaultValue.user.userId = userId;
  }, [nickname]);

  return (
    <UserContext.Provider value={{user: {nickname, accessToken, userId}, setNickname, setAccessToken, setUserId, project, setProject, issue, setIssue, commentList, setCommentList, addComment, projectList, setProjectList, addProject, projectId, setProjectId, issueList, setIssueList, addIssue, issueId, setIssueId}}>
      {children}
    </UserContext.Provider>
  )
};