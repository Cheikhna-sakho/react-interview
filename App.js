import Movie from './components/Movie.js';
import { MoviesContextProvider } from './contexts/MoviesContext.js';

var App = function App() {
    return React.createElement(
        MoviesContextProvider,
        null,
        React.createElement(
            'div',
            null,
            'In App',
            React.createElement(Movie, null)
        )
    );
};

export default App;