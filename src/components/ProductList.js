import React, {useContext} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import {CartContext} from "./CartContext"; // Імпортуйте компонент Cart

const ProductList = () => {
    const { setCartItems } = useContext(CartContext);


    const products = [
        {
            id: 1,
            name: "Молоко",
            price: 22
        },
        {
            id: 2,
            name: "Вода",
            price: 13
        },
        {
            id: 3,
            name: "Пиво",
            price: 36
        },
        {
            id: 4,
            name: "Хліб",
            price: 30
        },
        {
            id: 5,
            name: "Сметана",
            price: 52
        },
    ];

    const addToCart = (product) => {
        setCartItems(prevCartItems => {
            const existingItem = prevCartItems.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += 1;
                return [...prevCartItems];
            } else {
                return [...prevCartItems, { ...product, quantity: 1 }];
            }
        });
    };

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="center">Назва</TableCell>
                            <TableCell align="center">Ціна</TableCell>
                            <TableCell align="center">Дія з продуктом</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((p) => (
                            <TableRow key={p.id}>
                                <TableCell component="th" scope="row">
                                    {p.id}
                                </TableCell>
                                <TableCell align="center">{p.name}</TableCell>
                                <TableCell align="center">{p.price}</TableCell>
                                <TableCell align="center">
                                    <Button onClick={() => addToCart(p)}>Додати до корзини</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default ProductList;
