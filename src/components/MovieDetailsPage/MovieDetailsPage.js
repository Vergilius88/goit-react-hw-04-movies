import { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./MovieDetailsPage.css";

import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import * as movieApi from "../../services/moviesAPI";
import routes from "../../routes";

export default class MovieDetailsPage extends Component {
  state = {
    movie: { genres: [] },
  };
  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    movieApi.getMovieDetails(movieId).then((data) => {
      this.setState({
        movie: data,
      });
    });
  }
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.history.goBack();
  }

  render() {
    const {
      title,
      poster_path,
      vote_average,
      overview,
      release_date,
      genres,
    } = this.state.movie;

    return (
      <div>
        <button type="button" onClick={this.goBack}>
          go back
        </button>
        <div className="DetailsPage">
          <img alt={title} src={`${movieApi.posterImgPath}${poster_path}`} />
          <div className="DetailsPageAbout">
            <h2>
              {title} ({release_date})
            </h2>
            <p>User score: {vote_average} </p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>
              {genres.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="AdditionalInformation">
          <p>Additional information</p>
          <ul className="AdditionalInformationList">
            <li className="AdditionalInformationItem">
              <Link className="NavLink" to={`${this.props.match.url}/cast`}>
                Cast
              </Link>
            </li>
            <li className="AdditionalInformationItem">
              <Link className="NavLink" to={`${this.props.match.url}/reviews`}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route exact path={routes.cast} component={Cast} />
          <Route exact path={routes.reviews} component={Reviews} />
        </Switch>
      </div>
    );
  }
}
