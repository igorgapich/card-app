import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { useContext } from "react";
//import { CartContext } from "./CartContext";
import {ProductContext} from "./ProductReducer";

const pages = [
    {
        itemName: "Home",
        path: "/"
    },
    {
        itemName: "Product List",
        path: "/productslist"
    },
    {
        itemName: "Cart",
        path: "/cart"
    },
];

const Menu = () => {
    const { count } = useContext(ProductContext);

    // Обчислює загальну кількість унікальних товарів у кошику
    // const uniqueItemCount = count;

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Product Card
                    </Typography>
                    {pages.map((page) => (
                        <Link key={page.itemName} to={page.path} color="inherit">
                            <Button color="inherit" style={{color: "white"}}>{page.itemName}</Button>
                        </Link>
                    ))}
                    <Typography style={{ color: "white" }}>
                        <label>{count}</label>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Menu;
