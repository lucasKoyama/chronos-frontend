'use client';
import { createContext, ReactNode, useContext, useState, useMemo, useCallback } from 'react';
import { UserFromApi } from '../../types/user';
import { LoginData } from '../../types/login';
import { postLogin } from '../api/post';

interface AuthContextType {
  user: UserFromApi | null;
  login: (loginData: LoginData) => Promise<UserFromApi>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserFromApi | null>(null);

  const login = useCallback(async (loginData: LoginData): Promise<UserFromApi> => {
    const user = await postLogin(loginData);
    setUser(user);
    return user;
  }, []);

  const logout = useCallback(() => setUser(null), []);

  const contextValue = useMemo(() => ({ user, login, logout }), [user, login, logout]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
