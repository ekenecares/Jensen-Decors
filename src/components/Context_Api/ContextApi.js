import React, { createContext, useState, useEffect } from "react";
import products from "../../components/Product_data.js/Product_Data";

export const ShopContext = createContext(null);

const ContextApi = (props) => {

  const contextValue = {
    products,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ContextApi;
