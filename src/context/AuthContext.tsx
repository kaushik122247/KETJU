import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Role = 'farmer' | 'processor' | 'distributor' | 'retailer' | 'admin' | null;

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  walletAddress: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (data: SignupData) => Promise<void>;
  logout: () => void;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
  role: Exclude<Role, null>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// --- Mock user store ---
const MOCK_USERS: User[] = [
  { id: '1', name: 'John Doe',          email: 'farmer@test.com',     role: 'farmer',      walletAddress: '0x4f2c...8b1d' },
  { id: '2', name: 'FreshPack Foods',   email: 'processor@test.com',  role: 'processor',   walletAddress: '0x7a3b...2f90' },
  { id: '3', name: 'QuickMesh Logistics', email: 'distributor@test.com', role: 'distributor', walletAddress: '0x9b4c...3e12' },
  { id: '4', name: 'RetailMax Organic', email: 'retailer@test.com',   role: 'retailer',    walletAddress: '0x5d7f...9c21' },
  { id: '5', name: 'System Admin',      email: 'admin@test.com',      role: 'admin',       walletAddress: '0xc0de...4f8b' },
];

const SESSION_KEY = 'ketju_user';
const USERS_KEY = 'ketju_all_users';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [allUsers, setAllUsers] = useState<User[]>(MOCK_USERS);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem(SESSION_KEY);
    const storedAll = localStorage.getItem(USERS_KEY);
    
    if (storedAll) {
      try { setAllUsers(JSON.parse(storedAll)); } catch { /* ignore */ }
    } else {
      localStorage.setItem(USERS_KEY, JSON.stringify(MOCK_USERS));
    }
    
    if (storedUser) {
      try { setUser(JSON.parse(storedUser)); } catch { /* ignore */ }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    await new Promise(r => setTimeout(r, 800));
    const found = allUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
    
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
    if (!found || !passwordRegex.test(password)) {
      throw new Error('Invalid credentials or password security requirements not met (6+ chars & special sym).');
    }
    
    setUser(found);
    localStorage.setItem(SESSION_KEY, JSON.stringify(found));
  };

  const signup = async (data: SignupData): Promise<void> => {
    await new Promise(r => setTimeout(r, 1000));
    const exists = allUsers.find(u => u.email.toLowerCase() === data.email.toLowerCase());
    if (exists) throw new Error('An account with this email already exists.');
    
    const newUser: User = {
      id: String(Date.now()),
      name: data.name,
      email: data.email,
      role: data.role,
      walletAddress: '0x' + Math.random().toString(16).slice(2, 10) + '...' + Math.random().toString(16).slice(2, 6),
    };

    const updatedUsers = [...allUsers, newUser];
    setAllUsers(updatedUsers);
    localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));
    
    setUser(newUser);
    localStorage.setItem(SESSION_KEY, JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(SESSION_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
