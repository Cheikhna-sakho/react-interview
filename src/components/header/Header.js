import { MoviesShowContextData } from "../../contexts/MoviesContext.js";
import NavBar from "./NavBar.js"
import SearchBar from "./SearchBar.js";

const Header = () => {
    const {setMoviesShow} = MoviesShowContextData();
    return (
        <div className="header">
            <header className="grid-col center">
                <div className="logo" onClick={() => setMoviesShow(null)}>
                    <h1>My<span>Movies</span></h1>
                </div>
                <SearchBar/>
                <NavBar />
            </header>
        </div>
    )
}

export default Header