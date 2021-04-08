import { Link, withRouter } from "react-router-dom";
 import routes from "../../routes"

 const MoviesList =({movies, match})=>{
    return(
        <ul>
            {movies.map((item) => (
              <li key={item.id}>
                <Link to={`${routes.moviesPage}/${item.id}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
    )
}
export default withRouter(MoviesList)