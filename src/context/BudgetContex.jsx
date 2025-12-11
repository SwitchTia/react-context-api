import { createContext, useState } from "react";


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
export { BudgetProvider }