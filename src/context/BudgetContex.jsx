import { useContext, createContext, useState } from "react";


const BudgetContext = createContext();

//Provider
function BudgetProvider({ children }) {
    const [isBudgetMode, setIsBudgetMode] = useState(false);

    function toggleBudgetMode() {
        setIsBudgetMode((current) => !current);
    }

    function turnBudgetModeOff() {
        setIsBudgetMode(false);
    }

    const contextValue = {
        isBudgetMode,
        toggleBudgetMode,
        turnBudgetModeOff,
    };

    //Consumer:
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