import { CategoriesContextData } from "../../../contexts/MoviesContext.js"
import Categories from "./Categories.js";
import Popularity from "./Popularity.js";

const NavBar = () => {



    return (
        <nav className="grid-col">
            <Popularity />
            <Categories />
        </nav>
    )
}

export default NavBar