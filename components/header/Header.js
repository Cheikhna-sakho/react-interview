import { MoviesShowContextData } from "../../contexts/MoviesContext.js";
import NavBar from "./NavBar.js";
import SearchBar from "./SearchBar.js";

var Header = function Header() {
    var _MoviesShowContextDat = MoviesShowContextData(),
        setMoviesShow = _MoviesShowContextDat.setMoviesShow;

    return React.createElement(
        "div",
        { className: "header" },
        React.createElement(
            "header",
            { className: "grid-col center" },
            React.createElement(
                "div",
                { className: "logo", onClick: function onClick() {
                        return setMoviesShow(null);
                    } },
                React.createElement(
                    "h1",
                    null,
                    "My",
                    React.createElement(
                        "span",
                        null,
                        "Movies"
                    )
                )
            ),
            React.createElement(SearchBar, null),
            React.createElement(NavBar, null)
        )
    );
};

export default Header;