import { createContext, useContext, useState } from "react";
import { getData, postContract } from "../network/requests/contract/contract";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [isSave, setIsSave] = useState(false);
  const [list, setList] = useState([]);
  const [contract, setContract] = useState({});

  const getAllContract = async () => {
    try {
      const response = await getData();
      // console.log(response.contract);
      setContract(response.contract);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAllList = async () => {
    try {
      const response = await getData();
      // console.log(response.contract);
      setList(response.list);
    } catch (error) {
      console.log(error.message);
    }
  };

  const values = {
    isSave,
    setIsSave,
    contract,
    setContract,
    getAllContract,
    list,
    setList,
    getAllList,
  };

  return (
    <DashboardContext.Provider value={values}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
