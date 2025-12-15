import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext();

//Provider
function ShoppingCartProvider({ children }) {
  const [shoppingCartList, setShoppingCartList] = useState([]);

  function isShoppingCart(id) {
    return shoppingCartList.includes(id);
  }

  function addShoppingCart(id) {
    if (!shoppingCartList.includes(id)) {
      setShoppingCartList((current) => [...current, id]);
    }
  }

  function removeShoppingCart(id) {
    setShoppingCartList((current) => current.filter((cartId) => id !== cartId));
  }

  const contextValue = {
    shoppingCartList,
    isShoppingCart,
    addShoppingCart,
    removeShoppingCart
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

//Consumer:
function useShoppingCart() {
  const value = useContext(ShoppingCartContext);
  return value;
}

export { ShoppingCartProvider, useShoppingCart };