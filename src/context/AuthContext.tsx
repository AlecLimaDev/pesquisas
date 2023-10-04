import { useContext, createContext, ReactNode } from "react";

interface AuthProviderProps {
  children?: ReactNode;
  value?: any;
}

const AuthContext = createContext({});

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
  value,
}) => {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuthValue() {
  return useContext(AuthContext);
}
