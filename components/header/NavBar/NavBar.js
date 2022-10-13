import { CategoriesContextData } from "../../../contexts/MoviesContext.js";
import Categories from "./Categories.js";
import Popularity from "./Popularity.js";

var NavBar = function NavBar() {

    return React.createElement(
        "nav",
        { className: "grid-col" },
        React.createElement(Popularity, null),
        React.createElement(Categories, null)
    );
};

export default NavBar;