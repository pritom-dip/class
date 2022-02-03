import { createContext, useEffect, useState } from "react";

export const AddToCartContext = createContext({});

const AddToCartProvider = ({ children }) => {
    const [addToCart, setAddToCart] = useState([]);

    useEffect(() => {
        const prevItem = JSON.parse(localStorage.getItem("addToCart"));
        setAddToCart(prevItem);
    }, []);

    const addingToCart = product => {
        const allItems = [...addToCart, product];
        setAddToCart(allItems);
        localStorage.setItem("addToCart", JSON.stringify(allItems));
    };

    const deleteFromCart = id => {
        const filteredItem = addToCart.filter(product => product.id !== id);
        setAddToCart(filteredItem);
        localStorage.setItem("addToCart", JSON.stringify(filteredItem));
    };

    const value = {
        addToCart,
        addingToCart,
        deleteFromCart,
    };

    return <AddToCartContext.Provider value={value}>{children}</AddToCartContext.Provider>;
};

export default AddToCartProvider;
