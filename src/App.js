import Movies from './components/Movies.js'
import { MoviesContextProvider } from './contexts/MoviesContext.js'

const App = () => {
    return (
        <MoviesContextProvider>
            <div className='center app'>
                In App
                <Movies />
            </div>
        </MoviesContextProvider>
    )
}

export default App