const toggleBtn = (ref) => {
    const isActive = "active";
    let refClass = ref.current.className;
    if (!refClass.includes(isActive)) {
        ref.current.className += " active"
        return true;
        // movie[count]++;
    } else {
        // movie[count]--;
        ref.current.className = btnClass.split(" ").filter(selector => selector != isActive).join(" ");
        return false;
    }
} 
export default toggleBtn;