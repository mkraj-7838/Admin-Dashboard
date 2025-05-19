'use client';

import { createContext, useState, useEffect, ReactNode, useContext } from "react";

interface AuthContextType {
  user: string | null;
  setUser: (user: string | null) => void;
  isAuthenticated: () => boolean;
  login: () => void;
  logout: () => void;
  username: string;
  password: string;
  name: string;
  setName: (name: string) => void;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<string | null>(null);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setName(parsedUser.name ?? '');
      setUsername(parsedUser.username ?? '');
      setPassword(parsedUser.password ?? '');
      setUser(parsedUser.username);
    }
  }, []);

  const isAuthenticated = (): boolean => {
    return user != null;
  };

  const login = () => {
    setUser(username);
    // Removed redundant localStorage update
  };

  const logout = () => {
    setUser(null);
    setName("");
    setUsername("");
    setPassword("");
    localStorage.removeItem('user');
  };

  const value: AuthContextType = {
    user,
    setUser,
    isAuthenticated,
    login,
    logout,
    username,
    password,
    name,
    setName,
    setUsername,
    setPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};