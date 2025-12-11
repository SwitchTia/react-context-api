import { createContext } from "react";


const BudgetContext = createContext();

function BudgetProvider(){
    return (
    <BudgetContext.Provider value={contextValue}>
   
    </BudgetContext.Provider>
  );

}
export { BudgetProvider }