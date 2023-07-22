import { Link } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./Item.css";

function Item(props) {
  const { id, title, img, price, description } = props;

  return (
    <div className="row">
      <div className="col-md-4">
        <img className="card-img-top" src={`${img}`}></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description} {price}
          </p>
          <Link to={`/product/${id}`}>
            <ButtonComponent colorFondo="black">Ver Producto</ButtonComponent>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
