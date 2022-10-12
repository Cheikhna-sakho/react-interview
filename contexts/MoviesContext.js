var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { movies$ } from "../movies.js";
import getMoviesByCategories from "../utils/MoviesByCategories.js";

var MoviesContext = React.createContext(null);
export var MoviesContextProvider = function MoviesContextProvider(_ref) {
    var children = _ref.children;

    var _React$useState = React.useState(null),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        movies = _React$useState2[0],
        setMovies = _React$useState2[1];

    var _React$useState3 = React.useState(null),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        categories = _React$useState4[0],
        setCategories = _React$useState4[1];

    React.useEffect(function () {
        movies$.then(function (data) {
            return setMovies(data);
        }).catch(function (error) {
            return console.log(error);
        });
    }, []);
    React.useEffect(function () {
        movies && setCategories(getMoviesByCategories(movies));
    }, [movies]);
    var data = {
        contextMovies: [movies, setMovies],
        contextCategories: [categories, setCategories]
    };
    return React.createElement(
        MoviesContext.Provider,
        { value: { movies: movies, setMovies: setMovies, categories: categories, setCategories: setCategories } },
        children
    );
};
export var MovieContextData = function MovieContextData() {
    var _React$useContext = React.useContext(MoviesContext),
        movies = _React$useContext.movies,
        setMovies = _React$useContext.setMovies;

    return { movies: movies, setMovies: setMovies };
};
export var CategoriesContextData = function CategoriesContextData() {
    var _React$useContext2 = React.useContext(MoviesContext),
        categories = _React$useContext2.categories,
        setCategories = _React$useContext2.setCategories;

    return { categories: categories, setCategories: setCategories };
};
export default MoviesContext;