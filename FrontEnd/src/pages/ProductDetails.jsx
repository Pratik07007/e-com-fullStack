import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const {_id} = useParams();
  return <div>ProductDetails</div>;
};

export default ProductDetails;
