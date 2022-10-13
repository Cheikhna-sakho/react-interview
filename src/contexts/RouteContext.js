const RouteContext = React.createContext(null);
export const RouteContextProvider = ({ children }) => {
    const [route,setRoute] = React.useState(null);

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