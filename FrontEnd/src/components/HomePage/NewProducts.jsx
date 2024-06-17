import { newlyAddedProductsAtom } from "@/stores/atom";
import React, { useEffect, useState } from "react";
import { useRecoilValueLoadable } from "recoil";
import ProductCard from "./ProductCard";

const NewProducts = () => {
  const productLoadable = useRecoilValueLoadable(newlyAddedProductsAtom);

  
  
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    if (productLoadable.state === "hasValue") {
      setAllProducts(productLoadable.contents);
    }
  }, [productLoadable]);

  if (productLoadable.state === "loading") {
    return <div>Loading...</div>;
  }

  if (productLoadable.state === "hasError") {
    return <div>Error loading product details</div>;
  }

  return (
    <>
      <h1 className="text-5xl font-bold text-yellow-400 uppercase">
        newly added
      </h1>

      <div className="flex flex-wrap gap-10 justify-center">
        {allProducts.map((product) => {
          return <ProductCard key={product._id} {...product} />;
        })}
      </div>
    </>
  );
};

export default NewProducts;
