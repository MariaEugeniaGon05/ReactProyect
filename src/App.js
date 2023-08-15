import "./App.css";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./Context/cartContext";
import CartContainer from "./Components/CartContainer/CartContainer";
import OrderConfirm from "./Components/OrderConfirm/OrderConfirm";
import Checkout from "./Components/Checkout/Checkout";
import { _exportProducts } from "./services/firebase";

function App() {
  return (
    <div className="app-body">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          {/*<button onClick={_exportProducts}>Exportar</button>*/}
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />

            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />}></Route>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation/:id" element={<OrderConfirm />} />
            <Route path="*" element={<h1>Page not found: 404</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
