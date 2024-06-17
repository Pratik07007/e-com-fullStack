import { useEffect, useState, startTransition } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";
import { productDetailsAtomFamily } from "@/stores/atom";

const ProductDetails = () => {
  const { _id } = useParams();
  const productLoadable = useRecoilValueLoadable(productDetailsAtomFamily(_id));

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productLoadable.state === "hasValue") {
      startTransition(() => {
        setProduct(productLoadable.contents);
      });
    }
  }, [productLoadable]);

  if (productLoadable.state === "loading") {
    return <div>Loading...</div>;
  }

  if (productLoadable.state === "hasError") {
    return <div>Error loading product details</div>;
  }

  if (!product) {
    return null;
  }

  return (
    <div className="min-h-[70vh]">
      <h1>Product ID: {product._id}</h1>
      <h1>Product name: {product.name}</h1>
      <h1>Product category: {product.category}</h1>
      <h1>Product Description: {product.desc}</h1>
    </div>
  );
};

export default ProductDetails;
