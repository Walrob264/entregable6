import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import CardProduct from "../Home/CardProduct";
import "./styles/SimilarProduct.css";

const SimiliarProducts = ({ product }) => {
  const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1";
  const [productsByCategory, getProductByCategory] = useFetch(baseUrl);
  useEffect(() => {
    if (product) {
      getProductByCategory(`/products?categoryId= ${product.category.id}`);
    }
  }, [product]);

  return (
    <div>
      <h2>Discover similiar items</h2>
      <div className="Product_similiars">
        {productsByCategory?.slice(1, 4).map((prod) => {
          if (product.id !== prod.id) {
            return <CardProduct product={prod} key={prod.id} />;
          }
        })}
      </div>
    </div>
  );
};

export default SimiliarProducts;
