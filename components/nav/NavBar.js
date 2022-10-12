import { CategoriesContextData } from "../../../contexts/MoviesContext.js";

var NavBar = function NavBar() {
    var _CategoriesContextDat = CategoriesContextData(),
        categories = _CategoriesContextDat.categories;

    console.log(categories);
    return React.createElement(
        "nav",
        null,
        React.createElement(
            "select",
            null,
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