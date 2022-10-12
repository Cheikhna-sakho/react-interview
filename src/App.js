import Header from './components/header/Header.js'
import Movies from './components/Movies.js'
import { MoviesContextProvider } from './contexts/MoviesContext.js'
import { RouteContextProvider } from './contexts/RouteContext.js'

const App = () => {
    return (
        <RouteContextProvider>
            <MoviesContextProvider>
                <div className='app grid-row'>
                    <Header />
                    <main>
                        <Movies />
                    </main>
                </div>
            </MoviesContextProvider>
        </RouteContextProvider>
    )
}

export default App