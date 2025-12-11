import { createContext, useState } from "react";


const BudgetContext = createContext();


function BudgetProvider({ children }) {
    const [budgetMode, setBudgetMode] = useState("false");

    function isBudgetMode(id) {
        return budgetMode.includes(id);
    }

    function addBudgetMode(id) {
        setBudgetMode((current) => [...current, id]);
    }

    function deleteBudgetMode(id) {
        setBudgetMode((current) => current.filter((budgetModeId) => id !== budgetModeId));
    }

    const contextValue = {
        isBudgetMode,
        addBudgetMode,
        deleteBudgetMode
    };


    return (
        <BudgetContext.Provider value={contextValue}>
            {children}
        </BudgetContext.Provider>
    );

}
export { BudgetProvider }