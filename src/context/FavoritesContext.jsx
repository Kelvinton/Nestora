import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem("nestoraFavorites");

      return savedFavorites ? JSON.parse(savedFavorites) : [];
    } catch (error) {
      console.error("Failed to load favorites:", error);
      return [];
    }
  });

  const toggleFavorite = (property) => {
    setFavorites((currentFavorites) => {
      const alreadyFavorite = currentFavorites.some(
        (item) => item.id === property.id
      );

      const updatedFavorites = alreadyFavorite
        ? currentFavorites.filter(
            (item) => item.id !== property.id
          )
        : [...currentFavorites, property];

      localStorage.setItem(
        "nestoraFavorites",
        JSON.stringify(updatedFavorites)
      );

      return updatedFavorites;
    });
  };

  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem("nestoraFavorites");
  };

  const isFavorite = (propertyId) => {
    return favorites.some(
      (item) => item.id === propertyId
    );
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}