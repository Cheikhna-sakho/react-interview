function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import { MovieContextData } from "../../contexts/MoviesContext.js";
import toggleBtn from "../utils/toggleBtn.js";

var NoticeItem = function NoticeItem(_ref) {
    var iconClass = _ref.iconClass,
        movie = _ref.movie,
        increment = _ref.increment;

    var _MovieContextData = MovieContextData(),
        setMovies = _MovieContextData.setMovies;

    var count = increment >= 0 ? "likes" : "dislikes";
    var btn = React.useRef();
    var onClicked = function onClicked(e) {
        movie[count] += toggleBtn(btn) ? 1 : -1;
        setMovies(function (movieData) {
            return [].concat(_toConsumableArray(movieData));
        });
    };
    return React.createElement(
        "button",
        { ref: btn, onClick: onClicked, className: "notice-item grid-col" },
        React.createElement("i", { className: "bx bxs-" + iconClass }),
        React.createElement(
            "span",
            { className: "like" },
            movie[count]
        )
    );
};

export default NoticeItem;