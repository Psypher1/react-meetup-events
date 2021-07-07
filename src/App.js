import { Route, Switch } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={AllMeetups} />
        <Route path="/new-meetup" component={NewMeetup} />
        <Route path="/favourites" component={Favourites} />
      </Switch>
    </Layout>
  );
}

export default App;
