import Movie from './components/Movie.js'
import { MoviesContextProvider } from './contexts/MoviesContext.js'

const App = () => {
    return (
        <MoviesContextProvider>
            <div>
                In App
                <Movie />
            </div>
        </MoviesContextProvider>
    )
}

export default App