import { useDispatch } from "react-redux";
import { deleteCartThunk } from "../../store/slices/cart.slice";

const CartElement = ({ product }) => {
  const dispatch = useDispatch();
  const habdleDelete = () => {
    dispatch(deleteCartThunk(product.id));
  };

  return (
    <article className="product_for_buy">
      <section className="description_product">
        <header className="header_product">
          <img src={product.product.images[0].url} alt="" />
        </header>
        <div className="title_product">
          <p>{product.product.title}</p>
          <div className="quantity">
            <span>{product.quantity}</span>
          </div>
        </div>
        <button className="button_trash" onClick={habdleDelete}>
          <i className="bx bx-trash"></i>
        </button>
      </section>

      <footer className="footer_product">
        <span>Subtotal:</span>{" "}
        <span>{product.quantity * product.product.price}$</span>
      </footer>
    </article>
  );
};

export default CartElement;
