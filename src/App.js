import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AdminDashBoard from "./components/admin/adminDashBoard/AdminDashBoard";
import AdminLogin from "./components/admin/adminLogin/AdminLogin";
import DetailsView from "./components/home/detailsView/DetailsView";
import Home from "./components/home/Home";
import Jobs from "./components/home/jobs/Jobs";
import PopularJob from "./components/home/popularJob/PopularJob";
import Login from "./components/login/Login";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Profile from "./components/profile/Profile";
import NoMatch from "./components/shared/noMatchRoute/NoMatch";
import SignUp from "./components/signUp/SignUp";


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

        <PrivateRoute path="/view-details/:id">
          <DetailsView />
        </PrivateRoute>

        <Route path="/sign-up">
          <SignUp />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route path="/admin">
          <AdminLogin />
        </Route>

        <Route path="/admin-dashboard">
          <AdminDashBoard />
        </Route>


        <Route path="*">
          <NoMatch />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
