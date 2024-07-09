import { createContext, useState } from "react";

export const CalcContext = createContext();

export const CalcProvider = ({ children }) => {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
    mem: 0,
    secondFunc: false,
  });

  return (
    <CalcContext.Provider value={{ calc, setCalc }}>
      {children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
