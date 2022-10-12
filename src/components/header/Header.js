import NavBar from "./NavBar.js"

const Header = () => {
    return (
        <div className="header">
            <header className="grid-col center">

                <div className="logo">
                    <h1>My<span>Movies</span></h1>
                </div>
                <form>
                    <input type="search" name="search" id="search" />
                </form>
                <NavBar />
            </header>
        </div>
    )
}

export default Header