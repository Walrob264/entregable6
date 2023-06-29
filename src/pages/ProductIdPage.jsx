import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import ProductInfo from "../components/ProductId/ProductInfo";
import SimiliarProducts from "../components/ProductId/SimiliarProducts";
import SliderImgs from "../components/ProductId/SliderImgs";
import "./styles/ProductIdPage.css";
import Loading from "../components/shared/Loading";

const ProductIdPage = () => {
  const { id } = useParams();
  const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1";
  const [product, getProductById] = useFetch(baseUrl);
  useEffect(() => {
    getProductById(`/products/${id}`);
  }, [id]);

  return (
    <>
      {product ? (
        <div className="page">
          <div className="contain_info-product">
            <div className="imgs_product">
              <SliderImgs product={product} />
            </div>
            <ProductInfo product={product} />
          </div>
          <div className="containt_simliar-products">
            <SimiliarProducts product={product} />
          </div>
        </div>
      ) : (
        <Loading></Loading>
      )}
    </>
  );
};

export default ProductIdPage;
