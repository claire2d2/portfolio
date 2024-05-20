import { useContext } from "react";
import { SettingsContext } from "./SettingsContextWrapper";
const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === null) {
    throw new Error(
      "useSettings must be used within a SettingsContextProvider"
    );
  }
  return context;
};

export default useSettings;
