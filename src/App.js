import Header from './components/header/Header.js'
import Movies from './components/Movies.js'
import { MoviesContextProvider } from './contexts/MoviesContext.js'

const App = () => {
    return (
        <MoviesContextProvider>
            <div className='app grid-row'>
                <Header />
                <main>
                    <Movies />
                </main>
            </div>
        </MoviesContextProvider>
    )
}

export default App