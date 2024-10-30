"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Image from "next/image";

const products = [
  {
    isPopular: true,
    isBestValue: false,
    discount: "",
    id: "cabbce0d-a5c5-4590-984b-c6995c8174343f",
    name: "Justdone_plan_39.99_usd_30days_1_trial",
    regularity: "month",
    price: 3999,
    prev_price: 6999,
    currency: "USD",
    trial_period: 7,
    trial_amount: 99,
    label: "Unlimited 1-month Plan",
    per_text: "Per month",
  },
  {
    isPopular: false,
    isBestValue: false,
    discount: "90",
    id: "cabbce0d-a5c5-4590-984b-c64315c81744f",
    name: "Justdone_plan_1.00_usd_7days",
    regularity: "month",
    price: 100,
    prev_price: 1000,
    currency: "USD",
    trial_period: 7,
    trial_amount: 99,
    label: "7-day Access",
    per_text: "Then 29.99 per month",
  },
  {
    isPopular: false,
    isBestValue: true,
    discount: "50",
    id: "cabbce0d-a5c5-4590-984b-c6995c81744f",
    name: "Justdone_plan_24.99_usd_30days_7_trial",
    regularity: "month",
    price: 2499,
    prev_price: 4900,
    currency: "USD",
    trial_period: 7,
    trial_amount: 99,
    label: "Unlimited Annual Plan",
    per_text: "Per month",
  },
];

const ProductList = ({ variant }: { variant: string }) => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [isSaleEnded] = useState(() => {
    const saleEnded = localStorage.getItem("saleEnded") === "true";
    if (variant === "control" && !saleEnded) {
      localStorage.setItem("saleEnded", "true");
      return true;
    }
    return saleEnded;
  });
  
  const [saleTime, setSaleTime] = useState(
    Number(localStorage.getItem("saleTime")) || 60
  );

  useEffect(() => {
    if (isSaleEnded) return;

    const interval = setInterval(() => {
      setSaleTime((prevTime) => {
        if (prevTime > 0) {
          const newTime = prevTime - 1;
          localStorage.setItem("saleTime", newTime.toString());
          return newTime;
        } else {
          localStorage.setItem("saleEnded", "true");
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isSaleEnded]);

  const buttonHandler = () => {
    console.log({ id: selectedProduct.id, name: selectedProduct.name });
  };

  return (
    <div className="flex px-[13px] md:px-5 lg:px-20 max-w-[1297px] w-full flex-col items-center">
      {!isSaleEnded && (
        <div className="lg:hidden mt-10 flex w-full bg-saleBlack gap-2.5 p-2 rounded-xl items-center justify-center">
          <Image
            src={"/images/timer-icon.svg"}
            width={24}
            height={24}
            alt="timer"
          />
          <p className=" uppercase text-lightYellow text-sm tracking-[0.15px] font-semibold">
            SALE ENDS IN
          </p>
          <span className="uppercase text-lightYellow text-sm tracking-[0.15px] font-semibold">
            {saleTime! < 3600
              ? new Date(saleTime! * 1000).toISOString().slice(14, 19)
              : new Date(saleTime! * 1000).toISOString().slice(11, 19)}
          </span>
        </div>
      )}

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
