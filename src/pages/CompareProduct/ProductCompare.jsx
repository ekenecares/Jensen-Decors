import { useState } from "react"
import Product from "../../components/Product_data.js/Product";
import './productCompare.css'
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";


const ProductCompare = ({filteredProducts, product, handleCloseComparison}) => {
  const [compareIndex, setCompareIndex] = useState(0)

  const handleNextClick = () => {
    setCompareIndex(nextIndex => (nextIndex + 1) % filteredProducts.length)
  }

  const handlePrevClick = () => {
    setCompareIndex(prevIndex => (prevIndex - 1 + filteredProducts.length) % filteredProducts.length)
  }
  
  return (
    <div>
      <div className="overlay">
      </div>
      <div className="productcompare">

        <IoIosCloseCircleOutline className="close-comparison" onClick={handleCloseComparison}/>
      <h3>Compare products</h3>
      <div className="comparison">
        <div className="product">
          <Product {...product}/>
          <div className="product__details">
            <p>{product.available}</p>
            <p>Sales: {product.sales}</p>
          </div>
        </div>
        
        <span className='compare__icon'><MdOutlineCompareArrows size={50}/></span>

        <div className="product">
          <Product {...filteredProducts[compareIndex]}/>
          <div className="product__details">
            <p>{filteredProducts[compareIndex].available}</p>
            <p>Sales: {filteredProducts[compareIndex].sales}</p>
          </div>
          <div className="changeProductToCompareBtn">
            <FaArrowLeft onClick={handlePrevClick}/>
            <FaArrowRight onClick={handleNextClick}/>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductCompare;