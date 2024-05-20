import { createContext, useState, ReactNode } from "react";

type SettingsContextProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SettingsContext = createContext<SettingsContextProps | null>(null);

function SettingsContextWrapper({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <SettingsContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsContextWrapper;
