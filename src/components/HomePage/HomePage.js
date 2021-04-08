import { Component } from "react";
import "./HomePage.css";

import * as movieApi from "../../services/moviesAPI";
import MoviesList from "../MoviesList/MoviesList";

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    movieApi
      .getTrending()
      .then((data) => {
        this.setState({
          movies: data,
        });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="HomePage">{movies && <MoviesList movies={movies} />}</div>
    );
  }
}
