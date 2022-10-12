var toggleBtn = function toggleBtn(ref) {
    var isActive = "active";
    var refClass = ref.current.className;
    if (!refClass.includes(isActive)) {
        ref.current.className += " active";
        return true;
        // movie[count]++;
    } else {
        // movie[count]--;
        ref.current.className = btnClass.split(" ").filter(function (selector) {
            return selector != isActive;
        }).join(" ");
        return false;
    }
};
export default toggleBtn;