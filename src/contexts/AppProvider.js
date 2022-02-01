import { createContext, useEffect, useState } from "react";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const addToCart = () => {
        console.log("ADding to the cart");
    };

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    return <AppContext.Provider value={{ user, setUser, addToCart }}>{children}</AppContext.Provider>;
};

export default AppProvider;
