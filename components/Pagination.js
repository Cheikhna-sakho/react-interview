var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Pagination = function Pagination(data) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$start = _ref.start,
        start = _ref$start === undefined ? 0 : _ref$start,
        _ref$ratio = _ref.ratio,
        ratio = _ref$ratio === undefined ? 4 : _ref$ratio;

    var _React$useState = React.useState(start),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        page = _React$useState2[0],
        setPage = _React$useState2[1];

    var _React$useState3 = React.useState([]),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        nav = _React$useState4[0],
        setNav = _React$useState4[1];

    var _React$useState5 = React.useState(1),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        pageIndex = _React$useState6[0],
        SetPageIndex = _React$useState6[1];

    var _React$useState7 = React.useState(page),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        index = _React$useState8[0],
        setIndex = _React$useState8[1];

    var _React$useState9 = React.useState(null),
        _React$useState10 = _slicedToArray(_React$useState9, 2),
        end = _React$useState10[0],
        setEnd = _React$useState10[1];

    React.useEffect(function () {
        var lastValue = function lastValue() {
            var endVal = page + ratio;
            var len = data && data.length;
            return len > endVal ? endVal - len : null;
        };
        setEnd(lastValue());
    }, [data, ratio, page]);
    React.useEffect(function () {
        if (index > 0) {
            setPage(0);
            SetPageIndex(index / index);
        } else {
            SetPageIndex(0);
        }
        console.log();
    }, [data, index]);
    React.useEffect(function () {
        data && setIndex(Math.ceil(data.length / ratio));
        data && setNav(end ? data.slice(page, end) : data.slice(page));
    }, [data, page, end, ratio]);

    var next = function next() {
        if (data.length >= page + ratio) {
            SetPageIndex(pageIndex + 1);
            setPage(page + ratio);
        }
    };
    var back = function back() {
        if (page - ratio >= 0) {
            SetPageIndex(pageIndex - 1);
            setPage(page - ratio);
        }
    };
    return { next: next, back: back, nav: nav, index: index, pageIndex: pageIndex };
};
export default Pagination;