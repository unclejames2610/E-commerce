import React, { createContext, useState, useEffect } from "react";

//create context
export const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  //products state
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
    };
  }, []);

  return <ProductContext.Provider>{children}</ProductContext.Provider>;
};

export default ProductProvider;
