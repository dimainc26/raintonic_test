import { NavLink } from "react-router-dom"
import Hours from "./Hours"

const NavBar = () => {

    return (
    <div>
        <ul className="nav-items">
            <li> <NavLink to='Home'>Home</NavLink> </li>
            <li> <NavLink to='Home'>Favorites</NavLink> </li>
        </ul>
        <Hours/>
    </div>
  )
}

export default NavBar