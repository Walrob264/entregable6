import { useEffect, useState } from "react";
import UseViewport from "../../hooks/UseViewport";
import "./styles/FiltersProduct.css";
import useFetch from "../../hooks/useFetch";
import { getAllProductsThunk } from "../../store/slices/products.slice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const FiltersProducts = ({
  handleCloseFilter,
  setHandleCloseFilter,
  setPriceMinMax,
}) => {
  const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1";
  const dispatch = useDispatch();
  const { isMobile } = UseViewport();
  const [closeFilterPrice, setCloseFiltersPrice] = useState(true);
  const [closeFilterCategory, setcloseFilterCategory] = useState(true);
  const [categories, getAllCategories] = useFetch(baseUrl);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    getAllCategories("/categories");
  }, []);

  const handleFilter = () => {
    setHandleCloseFilter(false);
  };

  const handleFilterPrice = () => {
    if (closeFilterPrice === true) {
      setCloseFiltersPrice(false);
    } else {
      setCloseFiltersPrice(true);
    }
  };
  const handleAllCategories = () => {
    dispatch(getAllProductsThunk());
  };
  const handleFilterCategory = (id) => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`;
    dispatch(getAllProductsThunk(url));
  };
  const handleStyleCategory = () => {
    if (closeFilterCategory === true) {
      setcloseFilterCategory(false);
    } else {
      setcloseFilterCategory(true);
    }
  };
  const submit = (data) => {
    const min = data.from.trim() === "" ? 0 : +data.from;
    const max = data.to.trim() === "" ? Infinity : +data.to;
    if (to < from) {
      ("message");
    }
    setPriceMinMax({ min, max });
  };
  return (
    <div
      className={` ${isMobile ? "filter_containt-mobile" : "filter_containt"} ${
        handleCloseFilter && "filter_containt-mobileOpen"
      }`}
    >
      {isMobile && (
        <button className="button_close" onClick={handleFilter}>
          <i className="bx bx-x"></i>
        </button>
      )}
      <h1 className="title-filters">Filters</h1>
      <div className={`containt_form-filters ${closeFilterPrice && "close"}`}>
        <form onSubmit={handleSubmit(submit)} className="form_filter-price">
          <header onClick={handleFilterPrice} className="header_form">
            <h3 className="titlte-price">Price</h3>
            <i
              className={`bx  bxs-down-arrow ${
                closeFilterPrice && "bxs-up-arrow"
              }`}
            ></i>
          </header>
          <div>
            <label htmlFor="from"> from </label>
            <input {...register("from")} type="number" id="from" />
          </div>

          <div>
            <label htmlFor="to"> to </label>
            <input {...register("to")} type="number" id="to" />
          </div>

          <button>Filter Price</button>
        </form>
      </div>

      <article
        className={`containt_form-filters ${closeFilterCategory && "close"}`}
      >
        <header className={"header_category"} onClick={handleStyleCategory}>
          {" "}
          <h3>Category</h3>
          <i
            className={`bx  bxs-down-arrow ${
              closeFilterCategory && "bxs-up-arrow"
            }`}
          ></i>
        </header>
        <ul>
          <li onClick={handleAllCategories} className="categories_product">
            All Category
          </li>
          {categories?.map((category) => (
            <li
              className="categories_product"
              onClick={() => handleFilterCategory(category.id)}
              key={category.id}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default FiltersProducts;
