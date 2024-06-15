import { productDetailsAtomFamily } from "@/stores/atom";
import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

const ProductDetails = () => {
  const { _id } = useParams();
  const product = useRecoilValue(productDetailsAtomFamily(_id)); //this is the required product object
  console.log(product);

  return <div className="min-h-[70vh]">ProductDetails of {_id}</div>;
};

export default ProductDetails;
