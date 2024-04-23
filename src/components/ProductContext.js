import React, {createContext} from 'react';

export const ProductContext = createContext({
    id: 0,
    name: "",
    price: 0,
    addedToCart: () => null,
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

const ProductProvider = (props) => {
    return(
        <ProductContext.Provider value={{products: initialProducts}}>
            {props.children}
        </ProductContext.Provider>
    );
}
export default ProductProvider;