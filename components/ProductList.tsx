"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { useSaleTimer } from "../hooks/useSaleTimer";
import SaleTimer from "./SaleTimer";
import { generateProducts } from "../helpers/constants";

const ProductList = ({ variant }: { variant: string }) => {
  const { isSaleEnded, saleTime } = useSaleTimer({ variant });
  const products = generateProducts(isSaleEnded);

  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const buttonHandler = () => {
    console.log({ id: selectedProduct.id, name: selectedProduct.name });
  };

  return (
    <div className="flex px-[13px] md:px-5 lg:px-20 max-w-[1297px] w-full flex-col items-center">
      <SaleTimer
        className="lg:hidden"
        isSaleEnded={isSaleEnded}
        saleTime={saleTime}
      />

      <div className=" flex h-full w-full mt-[60px] flex-col-reverse lg:flex-row gap-6">
        {products.map((product) => (
          <ProductCard
            onClick={() => setSelectedProduct(product)}
            key={product.id}
            product={product}
            isSaleEnded={isSaleEnded}
            saleTime={saleTime}
            selected={selectedProduct.id === product.id}
          />
        ))}
      </div>
      <button
        onClick={buttonHandler}
        className="w-[296px] capitalize py-4 text-center mt-4 font-semibold text-white bg-gradient-to-r from-green to-blue leading-6 text-base tracking-[0.15px] rounded-full"
      >
        Get Started
      </button>
    </div>
  );
};

export default ProductList;
