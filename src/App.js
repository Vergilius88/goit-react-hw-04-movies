import React from "react";
import { Switch, Route } from "react-router-dom";


import "./App.css"
import HomePage from "./components/HomePage/HomePage";
import MoviesPage from "./components/MoviesPage/MoviesPage";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
import AppBar from "./components/AppBar/AppBar";
import routes from "./routes";

const App = () => (
  <>
    <AppBar />
    <Switch>
      <Route exact path={routes.homePage} component={HomePage} />
      <Route exact path={routes.moviesPage} component={MoviesPage} />
      <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
    </Switch>
  </>
);

export default App;
