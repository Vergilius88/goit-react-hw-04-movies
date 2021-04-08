import { Component } from "react";

import "./Cast.css";
import * as movieApi from "../../services/moviesAPI";

export default class Cast extends Component {
  state = { cast: [] };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;

    movieApi
      .getMovieCast(movieId)
      .then((data) => {
        this.setState({
          cast: data,
        });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    const { cast } = this.state;
    if (cast.length > 0) {
      return (
        <>
          <ul>
            {cast.map((item) => (
              <li key={item.id} className="CastPageItem">
                <img src={`${movieApi.imgPath}${item.profile_path}`} alt="" />
                <h4>{item.original_name}</h4>
                <p>Character: {item.character} </p>
              </li>
            ))}
          </ul>
        </>
      );
    }
    if (cast.length === 0) {
      return <h2>No data found</h2>;
    }
  }
}
