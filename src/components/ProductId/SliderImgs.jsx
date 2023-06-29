import { useState } from "react";
import "./styles/SliderImgs.css";
const SliderImgs = ({ product }) => {
  const [indexImg, setIndexImg] = useState(0);
  const styleMovible = {
    transform: `translateX(calc((-${indexImg} / 3) * 100%))`,
  };
  const handlePrevious = () => {
    if (indexImg - 1 >= 0) {
      setIndexImg(indexImg - 1);
    }
  };

  const handleNext = () => {
    if (indexImg + 1 <= 2) {
      setIndexImg(indexImg + 1);
    } else {
      setIndexImg(0);
    }
  };
  return (
    <>
      <div className="slider">
        <button className="slider_btn slider_left" onClick={handlePrevious}>
          &lt;
        </button>
        <div style={styleMovible} className="slider_movible">
          {product?.images.map((imgInfo, i) => (
            <div className="slider_img-container" key={imgInfo.id}>
              <img className="slider_img" src={imgInfo.url} alt={imgInfo.url} />
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="slider_btn slider_right">
          &gt;
        </button>
      </div>
      <div>
        <div className="slider_footer-container">
          <div className="slider_footer">
            {product?.images.map((imgInfo, i) => (
              <div
                className={`slider_footer-img-container ${
                  i === indexImg && "slider_img-active"
                }`}
                onClick={() => setIndexImg(i)}
                key={imgInfo.id}
              >
                <img
                  className="slider_img"
                  src={imgInfo.url}
                  alt={imgInfo.url}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderImgs;
