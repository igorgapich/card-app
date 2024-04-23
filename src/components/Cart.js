import React, {useContext} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import {CartContext} from "./CartReducer";

const Cart = () => {
    const {cartItems, handleRemoveFromCart} = useContext(CartContext);

    console.log("Items in cart:", cartItems); // Перевірка

    const totalPrice = cartItems ? cartItems.reduce((total, item) => total + item.price * item.quantity, 0) : 0;

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="center">Назва</TableCell>
                            <TableCell align="center">Ціна</TableCell>
                            <TableCell align="center">Кількість</TableCell>
                            <TableCell align="center">Сума</TableCell>
                            <TableCell align="center">Дія з продуктом</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartItems && cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell component="th" scope="row">
                                        {item.id}
                                    </TableCell>
                                    <TableCell align="center">{item.name}</TableCell>
                                    <TableCell align="center">{item.price}</TableCell>
                                    <TableCell align="center">{item.quantity}</TableCell>
                                    <TableCell align="center">{item.price * item.quantity}</TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => handleRemoveFromCart(item.id)}>Видалити</Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} align="center">Корзина порожня</TableCell>
                            </TableRow>
                        )}
                        <TableRow>
                            <TableCell colSpan={4} align="right">Загальна вартість:</TableCell>
                            <TableCell align="center">{totalPrice} USD</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default Cart;
