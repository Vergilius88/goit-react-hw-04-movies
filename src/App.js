import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import AppBar from "./components/AppBar/AppBar";
import routes from "./routes";

const HomePage = lazy(() => import("./components/HomePage/HomePage.js"));
const MoviesPage = lazy(() => import("./components/MoviesPage/MoviesPage.js"));
const MovieDetailsPage = lazy(() =>
  import("./components/MovieDetailsPage/MovieDetailsPage.js")
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h1>Download...</h1>}>
      <Switch>
        <Route exact path={routes.homePage} component={HomePage} />
        <Route exact path={routes.moviesPage} component={MoviesPage} />
        <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
