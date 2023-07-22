import { useState, useEffect } from "react";
import { getProductData } from "../../services/asyncMock";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  async function requestProduct() {
    const respuesta = await getProductData(id);
    setProduct(respuesta);
  }

  useEffect(() => {
    requestProduct();
  }, []);

  return (
    <>
      <div>
        <img width={500} src={product.img} alt="imagen"></img>
      </div>
      <div>
        <h2>{product.title}</h2>
      </div>
      <div>
        <h4>$ {product.price}</h4>
        <p>{product.description}</p>
      </div>
    </>
  );
}

export default ItemDetailContainer;
