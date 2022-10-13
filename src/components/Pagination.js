const Pagination = (data, { start = 0, ratio = 4 } = {}) => {
    const [page, setPage] = React.useState(start);
    const [nav, setNav] = React.useState([]);
    const [pageIndex,SetPageIndex] = React.useState(1);
    const [index,setIndex] = React.useState(1);
    const lastValue = () => {
        const endVal = (page + ratio);
        const len = data && data.length;
        return len > endVal ? endVal - len : null;
    }
    React.useEffect(() => {
        data && setIndex(Math.ceil(data.length/ratio))
        data && setNav(lastValue() ? (
            data.slice(page, lastValue())
        ) : data.slice(page));
    }, [data, page])

    const next = () => {
        if (data.length >= page + ratio) {
            SetPageIndex(pageIndex+1)
            setPage(page + ratio)
        }
    }
    const back = () => {
        if (page - ratio >= 0) {
            SetPageIndex(pageIndex-1)
            setPage(page - ratio)
        }
    }
    return { next, back, nav,index,pageIndex };
}
export default Pagination;