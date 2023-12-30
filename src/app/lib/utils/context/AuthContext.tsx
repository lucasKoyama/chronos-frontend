'use client';
import { createContext, ReactNode, useContext, useState, useMemo, useCallback, useEffect } from 'react';
import { LoginData, profile } from '../../types/login';
import { fetchUser, signIn } from '../api/auth';
import api from '../api/api';
import { usePathname, useRouter } from 'next/navigation';

interface AuthContextType {
  user: profile | null;
  login: (loginData: LoginData) => Promise<profile | undefined>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<profile | null>(null);

  const router = useRouter();
  const path = usePathname();
  useEffect(() => {
    const authenticate = async () => {
      try {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const userData = await fetchUser();
        if (userData) setUser(userData);
        if (path === '/') return router.push('/app');
        router.push(path);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    const token = localStorage.getItem('token');
    if (token) authenticate();
  }, []);

  const login = useCallback(async (loginData: LoginData): Promise<profile | undefined> => {
    const user = await signIn(loginData);
    if (user) setUser(user);
    return user;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    setUser(null);
    router.push('/');
  }, []);

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
