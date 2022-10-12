const RouteContext = React.createContext(null);
export const RouteContextProvider = ({ children }) => {
    const [route,setRoute] = React.useState(null);
    // React.useEffect(()=>{
    //     // console.log("route a jour");
    // },[route])
    
    return (
        <RouteContext.Provider value={{route,setRoute}}>
            {children}
        </RouteContext.Provider>
    )
}

export const RouteContextData = () => {
    const {route,setRoute} = React.useContext(RouteContext);
    return {route,setRoute};
}
export default RouteContext;