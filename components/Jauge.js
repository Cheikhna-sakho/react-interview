var Jauge = function Jauge(_ref) {
    var likes = _ref.likes,
        dislikes = _ref.dislikes;

    return React.createElement(
        "div",
        { className: "jauge-content" },
        React.createElement("div", { className: "jauge", style: { "--likes": likes, "--dislikes": dislikes } })
    );
};

export default Jauge;