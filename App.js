import Movies from './components/Movies.js';
import { MoviesContextProvider } from './contexts/MoviesContext.js';

var App = function App() {
    return React.createElement(
        MoviesContextProvider,
        null,
        React.createElement(
            'div',
            { className: 'center app' },
            'In App',
            React.createElement(Movies, null)
        )
    );
};

export default App;