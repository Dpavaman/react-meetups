import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavourites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoriteContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return [...prevUserFavorites, favoriteMeetup]
    });
  }
  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((item) => item.id !== meetupId);
    });
  }
  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((item) => item.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavourites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
