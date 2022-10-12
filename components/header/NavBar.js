import { CategoriesContextData } from "../../../contexts/MoviesContext.js";

var NavBar = function NavBar() {
    var _CategoriesContextDat = CategoriesContextData(),
        categories = _CategoriesContextDat.categories;

    console.log(categories);
    return React.createElement(
        "nav",
        { className: "grid-col" },
        React.createElement(
            "div",
            { className: "nav-item" },
            "Poulaire"
        ),
        React.createElement(
            "select",
            { className: "nav-item" },
            React.createElement(
                "option",
                { value: "" },
                "Categories"
            ),
            categories && categories.map(function (_ref) {
                var id = _ref.id,
                    title = _ref.title;
                return React.createElement(
                    "option",
                    { value: id, key: id },
                    title
                );
            })
        )
    );
};

export default NavBar;