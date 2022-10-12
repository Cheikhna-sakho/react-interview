import { CategoriesContextData, MoviesShowContextData } from "../../../contexts/MoviesContext.js";

const Categories = () => {
    const { categories } = CategoriesContextData();
    const {setMoviesShow} = MoviesShowContextData();
    
    const onChanged = (e) => {
        const { value } = e.target;
        const categoryData = categories.find(category => category.id == value);
        setMoviesShow(categoryData.movies);
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