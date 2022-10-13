var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var RouteContext = React.createContext(null);
export var RouteContextProvider = function RouteContextProvider(_ref) {
    var children = _ref.children;

    var _React$useState = React.useState(null),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        route = _React$useState2[0],
        setRoute = _React$useState2[1];

    return React.createElement(
        RouteContext.Provider,
        { value: { route: route, setRoute: setRoute } },
        children
    );
};

export var RouteContextData = function RouteContextData() {
    var _React$useContext = React.useContext(RouteContext),
        route = _React$useContext.route,
        setRoute = _React$useContext.setRoute;

    return { route: route, setRoute: setRoute };
};
export default RouteContext;