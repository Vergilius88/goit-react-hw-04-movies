import { Link, withRouter } from "react-router-dom";
import routes from "../../routes";

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map((item) => (
        <li key={item.id}>
          <Link
            to={{
              pathname: `${routes.moviesPage}/${item.id}`,
              state: { from: location },
            }}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default withRouter(MoviesList);
