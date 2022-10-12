function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getMoviesByCategories = function getMoviesByCategories() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var mytab = [];
    var uniqueAr = function uniqueAr(ar, distinct) {
        var arrayUniqueByKey = [].concat(_toConsumableArray(new Map(ar.map(function (item) {
            return [item[distinct], item];
        })).values()));
        return arrayUniqueByKey;
    };
    for (var index in params) {
        var element = params[index];
        if (element) {
            (function () {
                // console.log(element,"existe");
                var category = element.category;
                var moviesInCategories = [];
                var getMovies = [];
                if (category) {
                    moviesInCategories = params.filter(function (movie) {
                        return movie.category == category;
                    });

                    getMovies = moviesInCategories.map(function (movie) {
                        var clone = Object.assign({}, movie);
                        delete clone.category;
                        return clone;
                    });
                    mytab.push({ title: category, movies: getMovies });
                }
            })();
        }
    }
    return uniqueAr(mytab, "title").map(function (category, i) {
        category.id = i + 1;return category;
    });
};
export default getMoviesByCategories;