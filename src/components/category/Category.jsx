import Product from "../Product_data.js/Product";
const Category = ({ products }) => {
  return (
    <div className="category-products">
      {products.map(product => {
        return (
          <Product {...product}/>
        );
      })}
    </div>
  );
};

export default Category;
