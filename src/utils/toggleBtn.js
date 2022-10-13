const toggleBtn = (ref) => {
    const isActive = "active";
    let refClass = ref.current.className;
    if (!refClass.includes(isActive)) {
        ref.current.className += " active"
        return true;
    }
    ref.current.className = refClass.split(" ").filter(selector => selector != isActive).join(" ");
    return false;
}
export default toggleBtn;