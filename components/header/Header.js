import { MoviesShowContextData } from "../../contexts/MoviesContext.js";
import { RouteContextData } from "../../contexts/RouteContext.js";
import NavBar from "./NavBar/NavBar.js";
import SearchBar from "./SearchBar.js";

var Header = function Header() {
    var _MoviesShowContextDat = MoviesShowContextData(),
        setMoviesShow = _MoviesShowContextDat.setMoviesShow;

    var _RouteContextData = RouteContextData(),
        setRoute = _RouteContextData.setRoute;

    return React.createElement(
        "div",
        { className: "header" },
        React.createElement(
            "header",
            { className: "grid-col center" },
            React.createElement(
                "div",
                { className: "logo", onClick: function onClick() {
                        setMoviesShow(null);setRoute(null);
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