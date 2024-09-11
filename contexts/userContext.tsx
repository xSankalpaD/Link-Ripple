"use client";

import { UserDataType } from '@/lib/models/user';
import { createContext, useContext, useState } from 'react';

type UserContextType = {
  userData: UserDataType | null;
  setUserData: React.Dispatch<React.SetStateAction<UserDataType | null>>
}

const UserContext = createContext<UserContextType | null>(null);

type UserProviderProps = {
  children: React.ReactNode;
}

export const UserProvider = ({children}: UserProviderProps) => {
  const [userData, setUserData] = useState<UserDataType | null>(null);
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

