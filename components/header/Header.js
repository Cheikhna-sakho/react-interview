import NavBar from "./NavBar.js";

var Header = function Header() {
    return React.createElement(
        "div",
        { className: "header" },
        React.createElement(
            "header",
            { className: "grid-col center" },
            React.createElement(
                "div",
                { className: "logo" },
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
            React.createElement(
                "form",
                null,
                React.createElement("input", { type: "search", name: "search", id: "search" })
            ),
            React.createElement(NavBar, null)
        )
    );
};

export default Header;