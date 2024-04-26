import products from "../Product_data.js/Product_Data";
import Product from "../Product_data.js/Product";
import "./relatedProducts.css";

const RelatedProducts = ({ category }) => {
  return (
    <section className="bes-first">
      <div className="nex-div">
        <h2>You may also like</h2>
        <div className="nex-div-under">
          {products
            .filter((product) => product.category === category)
            .map((products, itemIndex) => {
              return <Product key={itemIndex} {...products} />;
            })
            .slice(0, 5)}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
