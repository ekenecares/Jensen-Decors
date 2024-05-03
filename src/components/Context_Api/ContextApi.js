import React, { createContext, useState, useEffect } from "react";
import products from "../../components/Product_data.js/Product_Data";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  return products.reduce((acc, product) => ({ ...acc, [product.id]: 0 }), {});
};

const ContextApi = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    // Initialize cartItems with data from localStorage, or default cart if not found
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    return storedCart || getDefaultCart();
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] > 0) {
        newCart[itemId] -= 1;
      }
      return newCart;
    });
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] > 0) {
        newCart[itemId] = 0;
      }
      return newCart;
    });
  };

  const getTotalCartAmount = () => {
    let total = 0;
  
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemId = Number(item);
        const itemInfo = products.find((product) => product.id === itemId);
  
        if (itemInfo && typeof itemInfo.priceCents === 'number') {
          total += itemInfo.priceCents * cartItems[item];
        } else {
          console.warn(`Product with id ${itemId} not found or has invalid price.`);
          // You can handle this case by skipping the item or logging an error
        }
      }
    }
  
    return total;
  };
  

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  useEffect(() => {
    // Save cartItems to localStorage whenever it changes
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const PlacedOrder = () => {
    setCartItems(getDefaultCart());
    setOrderPlaced(true);
  };

  const contextValue = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    removeItemFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    orderPlaced,
    PlacedOrder,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ContextApi;
