import React, { useContext, useState } from "react";
import ReactStars from "react-rating-stars-component";
import Product from "../../components/Product_data.js/Product";
import { ShopContext } from "../../components/Context_Api/ContextApi";
import { IoMdGitCompare } from "react-icons/io";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const ProductInfo = ({ handleShowComparison, product }) => {
  const { addToCart } = useContext(ShopContext);
  const handleDownloadDocument = (docLink) => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = docLink;
    // Set the download attribute to specify the filename
    link.download = "product_document.doc";
    // Append the anchor to the body
    document.body.appendChild(link);
    // Click the anchor to trigger download
    link.click();
    // Clean up by removing the anchor
    document.body.removeChild(link);
  };

  console.log(typeof setfer);
  console.log(typeof setShowComparison);

  return (
    <div className="info-product">
      <div className="prod-info-contain">
        <div className="prod-left">
          <div className="prod-imagery">
            <img src={product.url} />
          </div>
        </div>
        <div className="prid">
          <div className="prod-right">
            <div className="prit">
              <div className="a1">
                <h3>{product.title}</h3>
              </div>

              <div className="a2">
                <h4 className="pricer">$ {product.priceCents}</h4>

                <div className="starg">
                  <ReactStars
                    count={5}
                    size={15}
                    value={product.rating.stars}
                    isHalf={true}
                    activeColor="bisque"
                  />
                  <h3> (3400 reviews)</h3>
                </div>

                <h3 className="stred">Write a review below</h3>
              </div>

              <div className="a3">
                <div className="info">
                  <h3> Type:</h3> <h4>Wall Shelf</h4>
                </div>
                <div className="info">
                  <h3> Brand:</h3> <h4>{product.brand}</h4>
                </div>
                <div className="info">
                  <h3> Category:</h3> <h4>{product.category}</h4>
                </div>
                <div className="info">
                  <h3> Sub-Category:</h3> <h4>{product.subCategory}</h4>
                </div>
                <div className="info">
                  <h3> SKU:</h3> <h4>SKU19082</h4>
                </div>
                <div className="info">
                  <h3> Availability:</h3> <h4>{product.available}</h4>
                </div>

                <div className="info1">
                  <h3> Size:</h3>{" "}
                  <div className="preg">
                    <span>S</span>
                    <span>M</span>
                    <span>XL</span>
                  </div>
                </div>
                <div className="info">
                  <h3> Quality:</h3> <h4>Available in Bundles</h4>
                </div>

                <div className="info2">
                  <div className="proger" onClick={handleShowComparison}>
                    <div className="compare">
                      <IoMdGitCompare />
                    </div>
                    <h4>+ Compare</h4>
                  </div>

                  <div className="proger" onClick={()=>addToCart(product.id)}>
                    <div className="compare">
                      <MdOutlineAddShoppingCart />
                    </div>
                    <h4>+ Add To Cart</h4>
                  </div>
                </div>
              </div>

              <div className="info3">
                <button
                  onClick={() =>
                    handleDownloadDocument(product.productDetailUrl)
                  }
                  className="info3button"
                >
                  Download Product Details
                </button>
                <div className="info info7">
                  <h3> Taste:</h3>{" "}
                  <h4>Customers can send desired description of products !</h4>
                </div>

                <div className="info5">
                  <h3> Shipping & Returns</h3>{" "}
                  <div className="prpg">
                    <h4>
                      Elite free shipment of goods & pproducts purchased for
                      free during a 2 weeks course, to Lagos on all reas ranging
                      from the Island to the Mainland and ending at Ibeju-Lekki
                    </h4>
                  </div>
                </div>
              </div>

              <div className="info4">
                <h3> Product Link:</h3> <h4>Download Product Desc Above</h4>
              </div>
              <div className="info6 info7">
                <h3> Message:</h3> <h4>Happy Shopping!</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="desc">
        <h2>DESCRIPTION</h2>
        <div className="desx">
          <h4> {product.description}</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
