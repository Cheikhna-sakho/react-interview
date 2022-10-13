import Header from './components/header/Header.js'
import Movies from './components/Movies.js'
import { MoviesContextProvider } from './contexts/MoviesContext.js'
import { RouteContextData, RouteContextProvider } from './contexts/RouteContext.js'

const App = () => {
    
    return (
        <MoviesContextProvider>
            <RouteContextProvider>
                <div className='app grid-row'>
                    <Header />
                    <main>
                        <Movies />
                    </main>
                </div>
            </RouteContextProvider>
        </MoviesContextProvider>
    )
}

export default App