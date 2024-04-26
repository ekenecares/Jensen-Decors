import formatCurrency from '../../utils/money';
import './sidebar.css'

const SideBar = ({
  filteredProducts,
  selectedBrand,
  setSelectedBrand,
  selectedSubcategory,
  setSelectedSubcategory,
  selectedPriceRange,
  setSelectedPriceRange
}) => {
  const brands = [...new Set(filteredProducts.map((product) => product.brand))];
  const subcategories = [...new Set(filteredProducts.map((product) => product.subCategory))];
  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
  };

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setSelectedPriceRange([parseInt(e.target.value), selectedPriceRange[1]]);
  };

  const handleMaxPriceChange = (e) => {
    setSelectedPriceRange([selectedPriceRange[0], parseInt(e.target.value)]);
  };

  return (
    <div className="sidebar">
      <div className="filter">
        <h3>Brand:</h3>
        <div className="filter__item">
          <input
            type="checkbox"
            id="allBrands"
            value=''
            checked={selectedBrand === ''}
            onChange={handleBrandChange}  
          />
        <label htmlFor='allBrands'>All</label>
        </div>
        {brands.map((brand) => (
          <div className='filter__item' key={brand}>
            <input
              type="checkbox"
              id={brand}
              value={brand}
              checked={selectedBrand === brand}
              onChange={handleBrandChange}
            />
            <label htmlFor={brand}>{brand}</label>
          </div>
        ))}
      </div>
      <div className="filter">
        <h3>Subcategory:</h3>
        <div className="filter__item">
          <input
            type="checkbox"
            id="allSubCategory"
            value=''
            checked={selectedSubcategory === ''}
            onChange={handleSubcategoryChange}  
          />
          <label htmlFor='allSubCategory'>All</label>
        </div>
        {subcategories.map((subcategory) => (
          <div className='filter__item' key={subcategory}>
            <input
              type="checkbox"
              id={subcategory}
              value={subcategory}
              checked={selectedSubcategory === subcategory}
              onChange={handleSubcategoryChange}
            />
            <label htmlFor={subcategory}>{subcategory}</label>
          </div>
        ))}
      </div>
      <div className="filter">
        <h3>Price Range:</h3>
        <input
          type="range"
          min="0"
          max="100000"
          value={selectedPriceRange[0]}
          onChange={handlePriceRangeChange}
        />
        <input
          type="range"
          min="0"
          max="100000"
          value={selectedPriceRange[1]}
          onChange={handleMaxPriceChange}
        />
        <div>
        <span>${formatCurrency(selectedPriceRange[0])}</span> - <span>${formatCurrency(selectedPriceRange[1])}</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
