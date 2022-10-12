import Header from './components/header/Header.js'
import Movies from './components/Movies.js'
import NavBar from './components/nav/NavBar.js'
import { MoviesContextProvider } from './contexts/MoviesContext.js'

const App = () => {
    return (
        <MoviesContextProvider>
            <div className='center app grid-row'>
                <Header />
                <NavBar/>
                <Movies />
            </div>
        </MoviesContextProvider>
    )
}

export default App