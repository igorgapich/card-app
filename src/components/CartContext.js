import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const handleSetCartItems = (items) => {
        setCartItems(items);
    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems: handleSetCartItems }}>
            {children}
        </CartContext.Provider>
    );
};