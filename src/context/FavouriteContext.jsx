import { createContext, useContext, useState } from "react";

const FavouriteContext = createContext();

//Provider
function FavouriteProvider({ children }) {
  const [favouriteItemsList, setFavouriteItemsList] = useState([]);

  function isFavourite(id) {
    return favouriteItemsList.includes(id);
  }

  function addFavourite(id) {
    if (!favouriteItemsList.includes(id)) {
      setFavouriteItemsList((current) => [...current, id]);
    }
  }

  function removeFavourite(id) {
    setFavouriteItemsList((current) => current.filter((favouriteId) => id !== favouriteId));
  }

  const contextValue = {
    favouriteItemsList,
    isFavourite,
    addFavourite,
    removeFavourite,
  };

  return (
    <FavouriteContext.Provider value={contextValue}>
      {children}
    </FavouriteContext.Provider>
  );
}

//Consumer:
function useFavourite() {
  const value = useContext(FavouriteContext);
  
  if (!value) {
    throw new Error("useFavourite must be used within a FavouriteProvider");
  }
  
  return value;
}

export { FavouriteProvider, useFavourite };