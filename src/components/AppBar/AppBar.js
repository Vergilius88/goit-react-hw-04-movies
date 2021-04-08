import React from "react"
import{ NavLink } from "react-router-dom"
import routes from "../../routes"

import "./AppBar.css"
 
const AppBar=()=>{
    return(
        <header className="NavLinkBar">
      <NavLink
        exact
        className="NavLink"
        activeClassName="NavLink--active"
        to={routes.homePage}
      >
        Home
      </NavLink>

      <NavLink
        className="NavLink"
        activeClassName="NavLink--active"
        to={routes.moviesPage}
      >
        Movies
      </NavLink>
    </header>
    )
}
export default AppBar