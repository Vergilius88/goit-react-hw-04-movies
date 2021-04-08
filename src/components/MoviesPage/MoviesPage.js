import { Component } from "react";

import "./MoviesPage.css";

import * as movieApi from "../../services/moviesAPI";
import SearchForm from "../SearchForm/SearchForm";
import MoviesList from "../MoviesList/MoviesList";

export default class MoviesPage extends Component {
  static propTypes = {};

  state = {
    movies: [],
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search).get("query");
    if (!query) {
      return;
    }

    movieApi
      .getMoviesByKeyword(query)
      .then((movies) => {
        this.setState({
          movies: movies,
        });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  componentDidUpdate(prevProps, _prevState) {
    const prevQuery = new URLSearchParams(prevProps.location.search).get(
      "query"
    );
    const nextQuery = new URLSearchParams(this.props.location.search).get(
      "query"
    );

    if (prevQuery === nextQuery) {
      return;
    }

    movieApi
      .getMoviesByKeyword(nextQuery)
      .then((movies) => {
        this.setState({
          movies: movies,
        });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  handleFormSubmission = (searchQuery) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${searchQuery}`,
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <div className="HomePage">
        <SearchForm formSubmit={this.handleFormSubmission} />
        {movies && <MoviesList movies={movies} />}
      </div>
    );
  }
}
