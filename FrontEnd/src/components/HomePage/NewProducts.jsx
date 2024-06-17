import { newlyAddedProductsAtom } from "@/stores/atom";
import React, { useEffect, useState, startTransition } from "react";
import { useRecoilValueLoadable } from "recoil";
import ProductCard from "./ProductCard";

const NewProducts = () => {
  const [products, setProducts] = useState([]);
  const productsLoadable = useRecoilValueLoadable(newlyAddedProductsAtom);

  useEffect(() => {
    if (productsLoadable.state === "hasValue") {
      startTransition(() => {
        setProducts(productsLoadable.contents);
      });
    }
  }, [productsLoadable]);

  if (productsLoadable.state === "loading") {
    return <div>Loading...</div>;
  }

  if (productsLoadable.state === "hasError") {
    return <div>Error loading products</div>;
  }

  return (
    <>
      <h1 className="text-5xl font-bold text-yellow-400 uppercase">
        Newly Added
      </h1>
      <div className="flex flex-wrap gap-10 justify-center">
        {products.map((product) => {
          return <ProductCard key={product._id} {...product} />;
        })}
      </div>
    </>
  );
};

export default NewProducts;
