import React, { useContext, useState } from "react";
import { ShopContext } from "../../components/Context_Api/ContextApi";
import Product from "../../components/Product_data.js/Product";
import "./shopCategory.css";
import SideBar from "../../components/sidebar/SideBar";
import Category from "../../components/category/Category";
import { FaFilter } from "react-icons/fa";

const ShopCategory = (props) => {
  const { products } = useContext(ShopContext);

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 100000]); // Initial price range
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8); // Number of products per page
  const [showTheBar, setShowTheBar] = useState(false)
// Toggle Bar
const changeBar = () => {
  setShowTheBar(!showTheBar); // Toggle the state to show/hide the sidebar
};
  // Filtered and paginated products
  const filteredProducts = products.filter((item) => {
    return (
      item.category === props.category &&
      (selectedBrand === "" || item.brand === selectedBrand) &&
      (selectedSubcategory === "" || item.subCategory === selectedSubcategory) &&
      item.priceCents >= selectedPriceRange[0] &&
      item.priceCents <= selectedPriceRange[1]
    );
  });

  // Logic to paginate products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="category-body">
      <div className="shopCategory">
        <div className="shop-category">
          <div className="category-width">
            <div className="filter-stuff" onClick={changeBar}>
            <FaFilter />
            </div>
            
            <div className={showTheBar ? `${"show-cat"}` : `${"cat-left"}`}>
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
            <div className="cat-right cat-shower">
              <div className="category-display">
                <h2 className="category-namer">Categories</h2>
                <div className="cat-prod">
                  {/* Render current page of products */}
                  <Category products={currentProducts} />

                  {/* Pagination */}
                  <ul className="pagination">
                    {Array(Math.ceil(filteredProducts.length / productsPerPage))
                      .fill()
                      .map((_, index) => (
                        <li key={index} className="page-item">
                          <button onClick={() => paginate(index + 1)} className="page-link">
                            {index + 1}
                          </button>
                        </li>
                      ))}
                  </ul>
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
