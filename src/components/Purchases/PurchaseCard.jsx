import "./style/PurchaseCard.css";

const PurchaseCard = ({ product }) => {
  return (
    <article className="product_container">
      <img className="img_product" src={product.product.images[0].url} alt="" />
      <p className="title_product">{product.product.title}</p>

      <div className="quantity">{product.quantity}</div>
      <div> ${product.quantity * product.product.price}</div>
    </article>
  );
};

export default PurchaseCard;
