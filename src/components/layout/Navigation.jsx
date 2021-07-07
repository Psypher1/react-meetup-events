import { useContext } from "react";

import { NavLink, Link } from "react-router-dom";
import classes from "./Navigation.module.css";

import FavouritesContext from "../../store/favourites-context";

function Navigation() {
  const favesCtx = useContext(FavouritesContext);

  const activeStyle = {
    fontWeight: "bold",
  };
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.logo}>
        Technomancer Events
      </Link>
      <nav>
        <NavLink
          exact
          to="/"
          activeStyle={activeStyle}
          activeClassName="active"
        >
          Home
        </NavLink>
        <NavLink
          to="/new-meetup"
          activeStyle={activeStyle}
          className={classes.navItem}
        >
          New Event
        </NavLink>
        <NavLink
          to="/favourites"
          activeStyle={activeStyle}
          className={classes.navItem}
        >
          Favourites
          <span className={classes.badge}>{favesCtx.totalFavourites}</span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Navigation;
