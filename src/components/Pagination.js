const Pagination = (data, { start = 0, ratio = 4 } = {}) => {
    const [page, setPage] = React.useState(start);
    const [nav, setNav] = React.useState([]);
    const lastValue = () => {
        const endVal = (page + ratio);
        const len = data && data.length;
        return len > endVal ? endVal - len : null;
    }
    React.useEffect(() => {
        data && setNav(lastValue() ? (
            data.slice(page, lastValue())
        ) : data.slice(page));
    }, [data, page])

    const next = () => {
        if (data.length >= page + ratio) {
            setPage(page + ratio)
        }
    }
    const back = () => {
        if (page - ratio >= 0) {
            setPage(page - ratio)
        }
    }
    return { next, back, nav };
}
export default Pagination;