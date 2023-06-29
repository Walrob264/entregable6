import { Link } from "react-router-dom";
import "./style/Header.css";
import { useDispatch } from "react-redux";
import { getAllProductsThunk } from "../../store/slices/products.slice";
const Header = () => {
  const dispatch = useDispatch();

  const handleAllCategories = () => {
    dispatch(getAllProductsThunk());
  };
  return (
    <header className="header">
      <h2>
        <Link onClick={handleAllCategories} className="logo" to="/">
          e-commerce
        </Link>
      </h2>
      <nav>
        <ul>
          <li>
            <Link className="icons_links" to="/login">
              <i className="bx bx-user"></i>
            </Link>
          </li>
          <li>
            <Link className="icons_links" to="/cart">
              <i className="bx bx-cart"></i>
            </Link>
          </li>
          <li>
            <Link className="icons_links" to="/purchases">
              <i className="bx bx-cabinet"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
