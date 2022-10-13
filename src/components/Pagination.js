const Pagination = (data, { start = 0, ratio = 4 } = {}) => {
    const [page, setPage] = React.useState(start);
    const [nav, setNav] = React.useState([]);
    const [pageIndex, SetPageIndex] = React.useState(1);
    const [index, setIndex] = React.useState(page);
    const [end, setEnd] = React.useState(null);
    React.useEffect(() => {
        const lastValue = () => {
            const endVal = (page + ratio);
            const len = data && data.length;
            return len > endVal ? endVal - len : null;
        }
        setEnd(lastValue());
    }, [data, ratio,page])
    React.useEffect(() => {
        if (index > 0) {
            setPage(0);
            SetPageIndex(index / index);
        } else {
            SetPageIndex(0);
        }
        console.log();
    }, [data, index])
    React.useEffect(() => {
        data && setIndex(Math.ceil(data.length / ratio))
        data && setNav(end ? (
            data.slice(page, end)
        ) : data.slice(page));
    }, [data, page, end])

    const next = () => {
        if (data.length >= page + ratio) {
            SetPageIndex(pageIndex + 1)
            setPage(page + ratio)
        }
    }
    const back = () => {
        if (page - ratio >= 0) {
            SetPageIndex(pageIndex - 1)
            setPage(page - ratio)
        }
    }
    return { next, back, nav, index, pageIndex };
}
export default Pagination;