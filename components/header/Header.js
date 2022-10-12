var Header = function Header() {
    return React.createElement(
        "header",
        { className: "grid-col" },
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
        )
    );
};

export default Header;