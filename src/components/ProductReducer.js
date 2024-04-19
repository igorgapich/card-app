import React, {createContext, useReducer} from 'react';

export const ProductContext = createContext({
    add: () => null,
    id: 0,
    name: "",
    price: 0,
    count: 0
})

const initialProducts = [
    {
        id: 1,
        name: "Молоко",
        price: 22,
        addedToCart: false
    },
    {
        id: 2,
        name: "Вода",
        price: 13,
        addedToCart: false
    },
    {
        id: 3,
        name: "Пиво",
        price: 36,
        addedToCart: false
    },
    {
        id: 4,
        name: "Хліб",
        price: 30,
        addedToCart: false
    },
    {
        id: 5,
        name: "Сметана",
        price: 52,
        addedToCart: false
    },
];

const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
const COUNT = "COUNT";

const initialState = {
    products: initialProducts,
    count: 0,
};

const productReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            console.log(state);
            const id = action.payload?.id;
            if (id && state.products.find(item => item.id === id)) {
                return {
                    ...state,
                    products: state.products.map(item =>
                        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                    )
                };
            } else if (id) {
                return {
                    ...state,
                    products: [...state.products, { ...action.payload, quantity: 1 }]
                };
            } else {
                return state;
            }
        case COUNT:
            console.log(state);
            return {
                ...state,
                count: state.count + action.step,
            };
        default:
            return state;
    }
};

const ProductProvider = (props) => {
    const [products, dispatch] = useReducer(productReducer, initialState);
    const handleAddToCart = (productId) => {
        const productToAdd = initialProducts.find(product => product.id === productId);
        dispatch({ type: ADD_PRODUCT_TO_CART, payload: { id: productId, ...productToAdd } });
        dispatch({ type: COUNT, step: 1 });
    }

    const values = {...products,  handleAddToCart };
    return (
        <ProductContext.Provider value={values}>
            {props.children}
        </ProductContext.Provider>
    );
}
export default ProductProvider;