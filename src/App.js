import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DetailsView from "./components/home/detailsView/DetailsView";
import Home from "./components/home/Home";
import Jobs from "./components/home/jobs/Jobs";
import PopularJob from "./components/home/popularJob/PopularJob";
import NoMatch from "./components/shared/noMatchRoute/NoMatch";

function App() {
  return (
    <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/jobs">
            <Jobs />
          </Route>

          <Route path="/popular-jobs">
            <PopularJob />
          </Route>

          <Route path="/view-details/:id">
            <DetailsView />
          </Route>



          <Route path="*">
            <NoMatch />
          </Route>

        </Switch>
    </Router>
  );
}

export default App;
