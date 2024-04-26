import React, { useContext, useState } from "react";
import "./ProductDesc.css";
import Spans from "../../components/Text/Text";
import { ShopContext } from "../../components/Context_Api/ContextApi";
import { useParams } from "react-router-dom";
import ProductInfo from "./ProductInfo";
import ProductCompare from "../CompareProduct/ProductCompare";
import RelatedProducts from "../../components/related-products/RelatedProducts";

const ProductDesc = () => {
  const write = "PRODUCT DETAILS".split("");
  const { products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = products.find((e) => e.id === Number(productId));
  const [showComparison, setShowComparison] = useState(false);

  const handleShowComparison = () => {
    setShowComparison(true);
  };

  const handleCloseComparison = () => {
    setShowComparison(false);
  };

  const [fer, setfer] = useState(false);
  console.log(typeof setShowComparison);
  const filteredProducts = products.filter(
    (filteredProduct) =>
      filteredProduct.category === product.category &&
      filteredProduct.id !== product.id
  );

  return (
    <div className="product-desc">
      <section className="prod">
        <div className="">
          {write.map((letter, index) => {
            return (
              <Spans className="projer" key={index}>
                {letter === " " ? "\u00A0" : letter}
              </Spans>
            );
          })}
        </div>
      </section>

      {showComparison && (
        <ProductCompare
          filteredProducts={filteredProducts}
          product={product}
          handleCloseComparison={handleCloseComparison}
        />
      )}
      <ProductInfo
        product={product}
        handleShowComparison={handleShowComparison}
      />
      <RelatedProducts category={product.category} />
    </div>
  );
};

export default ProductDesc;
