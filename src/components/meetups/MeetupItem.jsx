// to tap into context
import { useContext } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

import FavouritesContext from "../../store/favourites-context";

export default function MeetupItem({ meetup }) {
  const favesCtx = useContext(FavouritesContext);

  const isItemFave = favesCtx.isItemFavourite(meetup.id);

  function handlelFaveToggle() {
    if (isItemFave) {
      favesCtx.removeFavourite(meetup.id);
    } else {
      favesCtx.addFavourite(meetup);
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={meetup.image} alt={meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={handlelFaveToggle}>
            {isItemFave ? "Remove from Faves" : "Add to Faves"}
          </button>
        </div>
      </Card>
    </li>
  );
}
