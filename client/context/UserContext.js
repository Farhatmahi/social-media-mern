import { createContext, useState } from "react";

export const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const userInfo = { user, setUser };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default ContextProvider;
