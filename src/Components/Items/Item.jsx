import { Link } from "react-router-dom";
import "./Item.css";

export default function Item(props) {
  const { id, title, img, price, description } = props;
  return (
    <div className="item-card">
      <div className="item-card_img">
        <img src={img} alt="" />
      </div>
      <div className="item-card_header">
        <h2>{title}</h2>
      </div>
      <div className="item-card_detail">
        <h4>$ {price}</h4>
        <small>{description}</small>
      </div>
      <Link to={`/product/${id}`}>
        <ButtonComponent colorFondo="purple"> Ver Producto</ButtonComponent>
      </Link>
    </div>
  );
}
