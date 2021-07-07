// for managing app wide state
import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  // add the keys here as well
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetupId) => {},
  isItemFavourite: (meetupId) => {},
});

// providing context to components that need values from it; updates context values
// will wrap
export function FavouritesContextProvider({ children }) {
  const [userFaves, setUserFaves] = useState([]);

  function handleAddFave(favouriteMeetup) {
    // react doesn ot process state updates instantly - have a function in the state change param
    setUserFaves((prevUserFaves) => {
      return prevUserFaves.concat(favouriteMeetup);
    });
  }

  function handleRemoveFave(meetupId) {
    setUserFaves((prevUserFaves) => {
      // if equal return false - drop the item where id is equal
      return prevUserFaves.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function handleIsItemFave(meetupId) {
    return userFaves.some((meetup) => meetup.id === meetupId);
  }

  // manage context data
  const context = {
    favourites: userFaves,
    totalFavourites: userFaves.length,
    // keys to be used in other places
    addFavourite: handleAddFave,
    removeFavourite: handleRemoveFave,
    isItemFavourite: handleIsItemFave,
  };
  //  wraps around components that will interact with the context
  return (
    <FavouritesContext.Provider value={context}>
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;
