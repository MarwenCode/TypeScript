import React, { createContext, useState, useContext } from 'react';

// Define the context
export const ContextApp = createContext<{ darkMode: boolean; toggleDarkMode: () => void } | undefined>(
  undefined
);

// Define the provider component
export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ContextApp.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ContextApp.Provider>
  );
};
