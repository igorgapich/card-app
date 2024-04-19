import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import {useContext} from "react";
import {ProductContext} from "./ProductReducer";

const ProductList = () => {
    const {products, handleAddToCart} = useContext(ProductContext);
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
                                    <Button onClick={() => handleAddToCart(p.id)}>Додати до корзини</Button>
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
