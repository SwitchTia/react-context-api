import {  useContext, createContext, useState } from "react";


const BudgetContext = createContext();


function BudgetProvider({ children }) {
    const [budgetMode, setBudgetMode] = useState(false);

    function isBudgetModeOn() {
        return budgetMode;
    }

    function turnBudgetModeOn() {
        setBudgetMode(true);
    }

    function turnBudgetModeOff() {
        setBudgetMode(false);
    }

    const contextValue = {
        budgetMode,
        isBudgetModeOn,
        turnBudgetModeOn,
        turnBudgetModeOff
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