import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import userDataFromJson from "../user.json";
import versionDataFromJson from "../version.json";
import { setSession } from "../auth/SessionState";

export type User = {
  username: string,
  password: string
};

export interface IAuth{
  user: User,
  setUser: Dispatch<SetStateAction<User>>
};

const defaultState = {
  user: {
    username: "",
    password: "",

  },
  setUser: (user: User) => {}  
} as IAuth;

const AuthContext = createContext(defaultState);

const AuthProvider: React.FC<{children: ReactNode}> = ({children}) => {
  
  const [user,setUser] = useState<User>({
    username: "",
    password: ""
  });

  useEffect(() => {  
    setSession(setUser);
}, []);  

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export {AuthContext, AuthProvider};