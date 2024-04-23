import React, { createContext, useReducer } from "react";

export const CartContext = createContext({
    cartItems: [],
    handleRemoveFromCart: () => {},
    handleAddToCart: () => {},
    handleCount: () => {},
    count: 0
});

const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const ADD_TO_CART = "ADD_TO_CART";
const COUNT = "COUNT";

const initialState = {
    cartItems: [],
    count: 0
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            };
        case ADD_TO_CART:
            const newCartItem = {
                ...action.payload,
                quantity: 1
            };
            return {
                ...state,
                cartItems: [...state.cartItems, newCartItem]
            };
        case COUNT:
            return {
                ...state,
                count: state.count + action.step
            };
        default:
            return state;
    }
}

const CartProvider = (props) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const handleRemoveFromCart = (productId) => {
        dispatch({type: REMOVE_FROM_CART, payload: {id: productId}});
    }

    const handleAddToCart = (product) => {
        dispatch({ type: ADD_TO_CART, payload: product });
    }

    const handleCount = () => {
        dispatch({ type: COUNT, step: 1 });
    }

    const values = {...state, handleRemoveFromCart, handleAddToCart, handleCount};

    return (
        <CartContext.Provider value={values}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;
