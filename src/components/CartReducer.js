import {createContext, useReducer} from "react";

export const CartContext = createContext({
    cartItems: [],
    handleRemoveFromCart: () => {},
    addToCart: () => {}
});

const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const ADD_TO_CART = "ADD_TO_CART";

const cartReducer = (state, action) => {
    switch (action.type) {
        case REMOVE_FROM_CART:
            return state.filter(item => item.id !== action.payload.id);
        case ADD_TO_CART:
            return [...state, action.payload];
        default:
            return state;
    }
}

const CartProvider = (props) => {

    const [cartItems, dispatch] = useReducer(cartReducer, [])
    const handleRemoveFromCart = (productId) => {
        dispatch({type: REMOVE_FROM_CART, payload: {id: productId}});
    }
    const addToCart = (product) => {
        dispatch({type: ADD_TO_CART, payload: product});
    }
    const values = {cartItems, handleRemoveFromCart, addToCart};
    return (
        <CartContext.Provider value={values}>
            {props.children}
        </CartContext.Provider>
    );
}
export default CartProvider;
