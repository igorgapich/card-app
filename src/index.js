import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import CartProvider from "./components/CartReducer";
import ProductProvider from "./components/ProductContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <CartProvider>
                <ProductProvider>
                    <App/>
                </ProductProvider>
            </CartProvider>
        </React.StrictMode>
    </BrowserRouter>
);