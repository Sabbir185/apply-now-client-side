import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/home/Home";
import Jobs from "./components/home/jobs/Jobs";
import PopularJob from "./components/home/popularJob/PopularJob";

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



        </Switch>
    </Router>
  );
}

export default App;
