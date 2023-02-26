import { createContext, useContext } from "react";

const AppContext = createContext();

export const useAppData = () => {
  const context = useContext(AppContext);
  return context;
};

export const AppContextProvider = ({ children }) => {
  return <>{children}</>;
};
