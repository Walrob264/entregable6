import { useState } from "react";
import "./styles/ProductInfo.css";
import { postCartThunk } from "../../store/slices/cart.slice";
import { useDispatch } from "react-redux";

const ProductInfo = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };
  const handleMinus = () => {
    if (quantity - 1 >= 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddtoCart = () => {
    dispatch(postCartThunk(product, quantity));
  };
  return (
    <article className="info_product">
      <h3>{product?.brand}</h3>
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <footer className="footer_info-product">
        <ul className="ul-info">
          <li>
            <span>Price</span>
            <span>${product?.price}</span>
          </li>
          <li>
            <span>Quantity</span>
            <div className="contain_product">
              <div onClick={handleMinus}>
                <i className="bx bx-minus"></i>
              </div>
              <div className="quanitity">{quantity}</div>
              <div onClick={handleAdd}>
                <i className="bx bx-plus"></i>
              </div>
            </div>
          </li>
        </ul>
        <button onClick={handleAddtoCart} className="button_product">
          Add to Cart <i className="bx bx-cart"></i>
        </button>
      </footer>
    </article>
  );
};

export default ProductInfo;
