import React from "react";
import "./styles/CardProduct.css";
import { useNavigate } from "react-router-dom";
import { postCartThunk } from "../../store/slices/cart.slice";
import { useDispatch } from "react-redux";

const CardProduct = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDetail = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddCart = (e) => {
    e.stopPropagation();
    dispatch(postCartThunk(product));
  };
  return (
    <article onClick={handleDetail} className="product">
      <header className="product_header">
        <div className="product_img-container">
          <img className="product_img" src={product.images[0].url} alt="" />
        </div>
        <div className="product_img-container">
          <img className="product_img" src={product.images[1].url} alt="" />
        </div>
      </header>
      <section className="product_body">
        <header className="product_titles">
          <h3 className="product_brand">{product.brand}</h3>
          <h2 className="product_name">{product.title}</h2>
        </header>

        <article className="product_price">
          <span className="product_price-label">price</span>
          <h3 className="product_price-value">$ {product.price}</h3>
        </article>
        <button onClick={handleAddCart} className="product_btn">
          <i className="bx bx-cart"></i>
        </button>
      </section>
    </article>
  );
};

export default CardProduct;
