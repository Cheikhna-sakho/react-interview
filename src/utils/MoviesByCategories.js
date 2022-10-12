const getMoviesByCategories = (params = []) => {
    let mytab = [];
    const uniqueAr = (ar, distinct) => {
        const arrayUniqueByKey = [...new Map(ar.map(item =>
            [item[distinct], item])).values()];
        return arrayUniqueByKey
    }
    for (let index in params) {
        let element = params[index]
        if (element) {
            // console.log(element,"existe");
            const category = element.category
            let moviesInCategories = [];
            let getMovies = [];
            if (category) {
                moviesInCategories = params.filter(movie => movie.category == category);

                getMovies = moviesInCategories.map(movie => {
                    const clone = { ...movie }
                    delete clone.category;
                    return clone;
                });
                mytab.push({ title: category, movies: getMovies });
            }
        }
    }
    return uniqueAr(mytab, "title").map((category, i) => { category.id = i + 1; return category });
}
export default getMoviesByCategories;