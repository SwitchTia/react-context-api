import {  useContext, createContext, useState } from "react";


const BudgetContext = createContext();


function BudgetProvider({ children }) {
    const [isBudgetMode, setIsBudgetMode] = useState(false);

    function toggleBudgetMode() {
        setIsBudgetMode((current) =>!current);
    }

    const contextValue = {
        isBudgetMode,
        toggleBudgetMode,
    };


    return (
        <BudgetContext.Provider value={contextValue}>
            {children}
        </BudgetContext.Provider>
    );

}


function useBudgetMode() {
  const value = useContext(BudgetContext);
  return value;
}

export { BudgetProvider, useBudgetMode }