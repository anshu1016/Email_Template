import { createContext, useContext, useState } from "react";

const EmailContext = createContext();
export function EmailContextProvider({ children }) {
  const [field, setField] = useState({
    name: "",
    CompanyName: "",
    EffectiveDate: "",
    LastDate: ""
  });
  return (
    <EmailContext.Provider value={{ field, setField }}>
      {children}
    </EmailContext.Provider>
  );
}

export const useEmail = () => useContext(EmailContext);
