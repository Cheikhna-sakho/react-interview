import { CategoriesContextData, MoviesShowContextData } from "../../../contexts/MoviesContext.js";

var Categories = function Categories() {
    var _CategoriesContextDat = CategoriesContextData(),
        categories = _CategoriesContextDat.categories;

    var _MoviesShowContextDat = MoviesShowContextData(),
        setMoviesShow = _MoviesShowContextDat.setMoviesShow;

    var onChanged = function onChanged(e) {
        var value = e.target.value;

        var categoryData = categories.find(function (category) {
            return category.id == value;
        });
        setMoviesShow(categoryData.movies);
    };
    return React.createElement(
        "select",
        { className: "nav-item", onChange: onChanged },
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
    );
};

export default Categories;