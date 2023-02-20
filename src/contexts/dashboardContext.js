import { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [isSave, setIsSave] = useState(false);
  const values = { isSave, setIsSave };
  return (
    <DashboardContext.Provider value={values}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
