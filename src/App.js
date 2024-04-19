import './App.css';
import {Route, Routes} from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Menu from "./components/Menu";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Menu/>
                <main>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/productslist" element={<ProductList/>}/>
                    </Routes>
                </main>
            </header>
        </div>
    );
}

export default App;
