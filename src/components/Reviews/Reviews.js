import { Component } from "react";

import * as movieApi from "../../services/moviesAPI";

export default class Reviews extends Component {
  state = { reviews: [] };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    movieApi
      .getMovieReviews(movieId)
      .then((reviews) => {
        this.setState({
          reviews: reviews,
        });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    const { reviews } = this.state;
    if (reviews.length > 0) {
      return (
        <>
          <ul>
            {reviews.map((item) => (
              <li key={item.id} className="">
                <h1>{item.author}</h1>
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
        </>
      );
    }
    if (reviews.length === 0) {
      return <h2>No data found</h2>;
    }
  }
}
