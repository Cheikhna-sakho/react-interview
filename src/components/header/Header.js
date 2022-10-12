const Header = () => {
    return (
        <header className="grid-col">
            <div className="logo">
                <h1>My<span>Movies</span></h1>
            </div>
            <form>
                <input type="search" name="search" id="search" />
            </form>
        </header>
    )
}

export default Header