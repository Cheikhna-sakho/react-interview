const getMoviesByCategories = (params = []) => {
    let mytab = [];
    const uniqueAr = (ar, distinct) => {
        const arrayUniqueByKey = [...new Map(ar.map(item =>
            [item[distinct], item])).values()];
        return arrayUniqueByKey
    }
    for (let element in params) {
        const category = params[element].category
        let moviesInCategories = [];
        let getMovies = [];
        if (category) {
            console.log(category, "categories");
            moviesInCategories = params.filter(movie => movie.category == category);

            getMovies = moviesInCategories.map(movie => {
                const clone = { ...movie }
                delete clone.category;
                return clone;
            });
            mytab.push({ category, movies: getMovies });
        }
    }
    return uniqueAr(mytab, "category").map((category,i) => {category.id = i+1; return category});
}
export default getMoviesByCategories;