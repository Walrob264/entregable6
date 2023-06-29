import { useSelector } from "react-redux";
import CartElement from "../components/cart/CartElement";
import "./styles/CartPage.css";
import usePurchase from "../store/slices/usePurchase.slice";
import { useEffect, useState } from "react";
const CartPage = () => {
  const cart = useSelector((states) => states.cart);
  const totalPrice = cart.reduce((acc, cv) => {
    const subtotal = cv.quantity * cv.product.price;
    return acc + subtotal;
  }, 0);
  const { makePurchase } = usePurchase();
  const habldePurchase = () => {
    makePurchase();
  };
  const [cartEmpty, setcartEmpty] = useState(true);
  useEffect(() => {
    if (cart.length === 0) {
      setcartEmpty(false);
    } else {
      setcartEmpty(true);
    }
  }, [cart]);
  return (
    <section className="cart_page">
      <div className="title">{cartEmpty && <h2>Cart</h2>}</div>
      <div className={`containt_cart ${cartEmpty ? "" : "cart_empty"}`}>
        {cartEmpty ? (
          <div className="containt_purchase">
            {cart.map((prod) => (
              <CartElement key={prod.id} product={prod} />
            ))}
          </div>
        ) : (
          <div className="containt_text-cartEmpty">
            <i className="bx bx-cart"></i>
            <h2>
              El carrito de compras esta vacio. Regrese a buscar uno de nuestros
              productos
            </h2>
          </div>
        )}
        {cartEmpty && (
          <footer className="footer_cart">
            <div className="total_buy">
              <span>total: </span> <span>{totalPrice}$</span>
            </div>
            <button onClick={habldePurchase} className="button_checkout">
              Checkout
            </button>
          </footer>
        )}
      </div>
    </section>
  );
};

export default CartPage;
