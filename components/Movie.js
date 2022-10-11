import NoticeItem from "./NoticeItem.js";

var Movie = function Movie(_ref) {
    var movie = _ref.movie;
    var title = movie.title,
        category = movie.category,
        like = movie.like,
        dislike = movie.dislike;

    return React.createElement(
        "article",
        { className: "movie" },
        React.createElement(
            "div",
            { className: "movie-cover" },
            React.createElement("img", { src: "./assets/images/movieFortest.jpg", alt: "movie cover" })
        ),
        React.createElement(
            "div",
            { className: "movie-info" },
            React.createElement(
                "h2",
                { className: "movie-title" },
                " nom : ",
                title
            ),
            React.createElement(
                "h3",
                null,
                "Categorie: ",
                category
            ),
            React.createElement(
                "div",
                { className: "notice grid-col" },
                React.createElement(NoticeItem, { itemClass: "like", iconClass: "like", count: like }),
                React.createElement(NoticeItem, { itemClass: "dislike", iconClass: "dislike", count: dislike })
            )
        )
    );
};

export default Movie;