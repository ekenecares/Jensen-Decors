import { useContext, useState } from "react";
import { ShopContext } from "../../components/Context_Api/ContextApi";
import Product from "../../components/Product_data.js/Product";
import "./shopCategory.css";
import SideBar from "../../components/sidebar/SideBar";
import Category from "../../components/category/Category";
const ShopCategory = (props) => {
  const { products } = useContext(ShopContext);

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 100000]); // Initial price range

  // Filter products based on selected filters
  const filteredProducts = products.filter((item) => {
    return (
      item.category === props.category &&
      (selectedBrand === "" || item.brand === selectedBrand) &&
      (selectedSubcategory === "" ||
        item.subCategory === selectedSubcategory) &&
      item.priceCents >= selectedPriceRange[0] &&
      item.priceCents <= selectedPriceRange[1]
    );
  });

  return (
    <div className="category-body">

      <div className="shopCategory">
        <div className="shop-category">
          <div className="category-width">
            <div className="cat-left">
              <SideBar
                filteredProducts={filteredProducts}
                selectedBrand={selectedBrand}
                setSelectedBrand={setSelectedBrand}
                selectedSubcategory={selectedSubcategory}
                setSelectedSubcategory={setSelectedSubcategory}
                selectedPriceRange={selectedPriceRange}
                setSelectedPriceRange={setSelectedPriceRange}
              />
            </div>
            <div className="cat-right">
              <div className="category-display">
                <h2 className="category-namer">
                  ...Categories

                </h2>
                <div className="cat-prod">
                  <Category products={filteredProducts} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
