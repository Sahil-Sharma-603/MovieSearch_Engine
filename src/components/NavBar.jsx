import {Link} from "react-router-dom";

function NavBar(){

    return(
        <nav className = "navbar">
            <div className = "navbar-brand">
                <Link to = "/">Movie Search Engine</Link>
            </div>

            <div className = "navBar-links">
                <Link to = "/" className = "nav-link">Home</Link>
                <Link to = "/favourites" className = "nav-link">Favourites</Link>
            </div>

        </nav>

    );
}

export default NavBar;