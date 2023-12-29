'use client';
import { createContext, ReactNode, useContext, useState, useMemo, useCallback, useEffect } from 'react';
import { LoginData, profile, token } from '../../types/login';
import { fetchUser, signIn } from '../api/auth';

interface AuthContextType {
  user: profile | null;
  login: (loginData: LoginData) => Promise<profile | undefined>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<profile | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUser();
        if (userData) setUser(userData);
        console.log(userData)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const token = localStorage.getItem('token');
    if (token) fetchData();
  }, []);

  const login = useCallback(async (loginData: LoginData): Promise<profile | undefined> => {
    const user = await signIn(loginData);
    if (user) setUser(user);
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
