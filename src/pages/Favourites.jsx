import { useContext } from "react";

import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

function Favourites() {
  const favesCtx = useContext(FavouritesContext);

  let content;

  if (favesCtx.totalFavourites === 0) {
    content = (
      <div className="faves">
        <p className="faves-text">You have no favourites yet... Add some? </p>
        <a href="/">&#8592; Events </a>
      </div>
    );
  } else {
    content = <MeetupList meetups={favesCtx.favourites} />;
  }

  return (
    <section>
      <h2>Favourites</h2>
      {content}
    </section>
  );
}

export default Favourites;
