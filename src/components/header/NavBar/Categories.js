import { RouteContextData } from "../../../contexts/RouteContext.js";
import { CategoriesContextData, MoviesShowContextData } from "../../../contexts/MoviesContext.js";

const Categories = () => {
    const { categories } = CategoriesContextData();
    const {setMoviesShow} = MoviesShowContextData();
    const {setRoute} = RouteContextData();

    const onChanged = (e) => {
        const { value } = e.target;
        const categoryData = categories.find(category => category.id == value);
        categoryData && setMoviesShow(categoryData.movies);
        setRoute("Categorie/"+categoryData.title);
    }
    return (
        <select className="nav-item" onChange={onChanged}>
            <option value="">Categories</option>
            {categories && categories.map(({ id, title }) => (
                <option value={id} key={id}>{title}</option>
            ))}
        </select>
    )
}

export default Categories