import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Loader from "./components/Loader/Loader";
import Register from "./pages/Auth/Register";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Auth/Login";
import Protect from "./pages/protect/Protect";
import ProductDesc from "./pages/ProductDesc/ProductDesc";
import Contact from "./components/Footer/Contact"
import products from "./components/Product_data.js/Product_Data";
import ShopCategory from "./pages/ShopCategory/ShopCategory";
import Brands from "./pages/Brands/Brands";
function App() {
  const categories = [...new Set(products.map((product) => product.category))];

  const categoriesRoutes = categories.map((category) => (
    <Route
      key={category}
      path={`/category/${category.replace(/\s+/g, "-").toLowerCase()}`}
      element={<ShopCategory category={category} />}
    />
  ));
  const subCategories = [
    ...new Set(products.map((product) => product.subCategory)),
  ];

  const brands = [...new Set(products.map((product) => product.brand))];

  const brandsRoutes = brands.map((brand) => (
    <Route
      key={brand}
      path={`/${brand.replace(/\s+/g, "-").toLowerCase()}`}
      element={<Brands brand={brand} />}
    />
  ));

  const subCategoriesRoutes = subCategories.map((subCategory) => (
    <Route
      key={subCategory}
      path={`/sub`}
      element={<ShopCategory category={subCategory} />}
    />
  ));

  return (
    <>
      <BrowserRouter>
        <Loader />

        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Protect />}>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductDesc />}>
              <Route path=":productId" element={<ProductDesc />} />
            </Route>
            {categoriesRoutes}
            {brandsRoutes}
            <Route path="/contact" element={<Contact/>}/>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
