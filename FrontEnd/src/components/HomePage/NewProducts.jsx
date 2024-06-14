import { newlyAddedProductsAtom } from "@/stores/atom";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import ProductCard from "./ProductCard";

const NewProducts = () => {
  const products = useRecoilValue(newlyAddedProductsAtom);
  console.log(products);

  return (
    <>
      <h1 className="text-5xl font-bold text-yellow-400 uppercase">
        newly added
      </h1>

      <div className="flex flex-wrap gap-10 justify-center">
        {products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
    </>
  );
};

export default NewProducts;
