import { useContext, createContext } from "react";

const SessionContext = createContext();

export const useSession = () => {
  const context = useContext(SessionContext);
};

export const SessionProvider = ({ children }) => {
  return;
};
