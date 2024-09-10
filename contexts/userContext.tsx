"use client";

import { UserData } from '@/lib/models/user';
import { createContext, useContext, useState } from 'react';

type UserContextType = {
  userData: UserData | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>
}

const UserContext = createContext<UserContextType | null>(null);

type UserProviderProps = {
  children: React.ReactNode;
}

export const UserProvider = ({children}: UserProviderProps) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const value = {
    userData, setUserData
  };
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useUser must be used within a UserProvider!"
    );
  }
  return context;
}

