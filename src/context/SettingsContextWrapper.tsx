import { createContext, useState, ReactNode } from "react";

type SettingsContextProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
};

export const SettingsContext = createContext<SettingsContextProps | null>(null);

function SettingsContextWrapper({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);

  const [language, setLanguage] = useState("en");
  return (
    <SettingsContext.Provider
      value={{
        darkMode,
        setDarkMode,
        language,
        setLanguage,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsContextWrapper;
