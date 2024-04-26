import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../components/Context_Api/ContextApi";
import formatCurrency from "../../utils/money";

const Product = (props) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="maintain">
      <Link to={`/product/${props.id}`}>
        <div className="product">
          <div className="new">
            <h4> New </h4>
          </div>
          <div className="discount">
            <h4> -{props.discount}%</h4>
          </div>

          <div className="discount-line"></div>

          <div className="product-image">
            <img src={props.url} />
            <img src={props.url} />
          </div>
          <div className="descript">
            <h4>{props.title}</h4>
            <h5 className="prices"> ${formatCurrency(props.priceCents)}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
