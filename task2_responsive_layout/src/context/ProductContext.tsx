import { createContext, useContext, useState } from 'react';

import { productsData } from '@/constants/products';

import { Product, ProductContextType, ProductProviderProps } from "@/types/product.ts";

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products] = useState<Product[]>(productsData);
  const [selectedProduct, setSelectedProduct] = useState<Product>(productsData[1]);

  const selectProduct = (id: number) => {
    const product = products.find((product) => product.id === id);
    if (product) {
      setSelectedProduct(product);
    }
  };

  return (
      <ProductContext.Provider value={{ products, selectedProduct, selectProduct }}>
        {children}
      </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};
