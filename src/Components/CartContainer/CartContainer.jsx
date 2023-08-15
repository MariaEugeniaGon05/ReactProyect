import React from "react";
import { useContext } from "react";
import { cartContext } from "../../Context/cartContext.jsx";
import { createOrder } from "../../services/firebase";
import { Link, useNavigate } from "react-router-dom";

function CartContainer() {
  const { cart, removeItem } = useContext(cartContext);

  return (
    <div>
      <h1>Carrito</h1>
      {cart.map((item) => (
        <div key={item}>
          {console.log(item.id)}
          <div>
            <img width={600} src={item.img} alt="imagen"></img>
          </div>
          <h2>{item.title}</h2>
          <p>Precio unitario: ${item.price}</p>
          <p>Cantidad a comprar{item.count}</p>
          <p>Precio total ${item.count * item.price}</p>
          <button onClick={() => removeItem(item.id)}>Eliminiar</button>
        </div>
      ))}
      <br />
      <div>Total a pagar: $</div>
      <Link to="/checkout">Comprar</Link>
    </div>
  );
}

export default CartContainer;
