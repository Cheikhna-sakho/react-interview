const NoticeItem = ({ itemClass, iconClass, count }) => {
    return (
        <div className={`notice-item ${itemClass}`}>
            <button>
                <i className={`bx bxs-${iconClass}`}></i>
            </button>
            <span className="like">
                {count}
            </span>
        </div>
    )
}

export default NoticeItem