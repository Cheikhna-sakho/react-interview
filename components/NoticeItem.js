var NoticeItem = function NoticeItem(_ref) {
    var itemClass = _ref.itemClass,
        iconClass = _ref.iconClass,
        count = _ref.count;

    return React.createElement(
        "div",
        { className: "notice-item " + itemClass },
        React.createElement(
            "button",
            null,
            React.createElement("i", { className: "bx bxs-" + iconClass })
        ),
        React.createElement(
            "span",
            { className: "like" },
            count
        )
    );
};

export default NoticeItem;