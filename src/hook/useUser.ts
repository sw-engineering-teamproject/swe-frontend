import { UserContext, UserContextValues } from "@/contexts/UserContext";
import { useContext } from "react";

export const useUser = () : UserContextValues => {
    return useContext(UserContext);
  }