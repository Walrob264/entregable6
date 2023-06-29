import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardProduct from "../components/Home/CardProduct";
import "../components/Home/styles/Home.css";
import FiltersProducts from "../components/Home/FiltersProducts";
import UseViewport from "../hooks/UseViewport";
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [priceMinMax, setPriceMinMax] = useState({
    min: 0,
    max: Infinity,
  });
  const products = useSelector((states) => states.products);
  const { isMobile } = UseViewport();
  const [filterOptions, setFilterOptions] = useState(false);
  const [handleCloseFilter, setHandleCloseFilter] = useState(false);

  const handlefilters = () => {
    setFilterOptions(true);
    setHandleCloseFilter(true);
  };
  const handleSearchName = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const cbFilter = (product) => {
    return product.title.toLowerCase().includes(inputValue);
  };
  const cbFilterPrice = (product) => {
    const condMin = priceMinMax.min <= product.price;
    const condMax = product.price <= priceMinMax.max;
    return condMin && condMax;
  };

  return (
    <>
      <div className="containt_form-search">
        <form className="form_search">
          <input value={inputValue} type="text" onChange={handleSearchName} />
          <button className="button_search">
            <i className="bx bx-search-alt-2"></i>
          </button>
        </form>
      </div>

      <div className={`body_store ${isMobile ? "body_store-mobile" : ""}`}>
        {isMobile && (
          <div className="contain_filter">
            <button className="button_filter" onClick={handlefilters}>
              <i className="bx bx-filter-alt"></i> Filter
            </button>
            <FiltersProducts
              handleCloseFilter={handleCloseFilter}
              setHandleCloseFilter={setHandleCloseFilter}
            />
          </div>
        )}
        {!isMobile && <FiltersProducts setPriceMinMax={setPriceMinMax} />}
        <div className="containt_cards">
          {products
            ?.filter(cbFilter)
            .filter(cbFilterPrice)
            .map((product) => (
              <CardProduct product={product} key={product.id} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
