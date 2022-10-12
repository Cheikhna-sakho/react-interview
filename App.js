import Header from './components/header/Header.js';
import Movies from './components/Movies.js';
import NavBar from './components/nav/NavBar.js';
import { MoviesContextProvider } from './contexts/MoviesContext.js';

var App = function App() {
    return React.createElement(
        MoviesContextProvider,
        null,
        React.createElement(
            'div',
            { className: 'center app grid-row' },
            React.createElement(Header, null),
            React.createElement(NavBar, null),
            React.createElement(Movies, null)
        )
    );
};

export default App;