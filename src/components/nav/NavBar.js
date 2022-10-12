import { CategoriesContextData } from "../../../contexts/MoviesContext.js"

const NavBar = () => {
    const { categories } = CategoriesContextData();
    console.log(categories);
    return (
        <nav>
            <select >
                <option value="">Categories</option>
                {categories && categories.map(({ id, title }) => (
                    <option value={id} key={id}>{title}</option>
                ))}
            </select>
        </nav>
    )
}

export default NavBar