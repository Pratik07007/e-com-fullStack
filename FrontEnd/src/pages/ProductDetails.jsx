import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";
import { productDetailsAtomFamily } from "@/stores/atom";

const ProductDetails = () => {
  const { _id } = useParams();
  const productLoadable = useRecoilValueLoadable(productDetailsAtomFamily(_id));
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productLoadable.state === "hasValue") {
      setProduct(productLoadable.contents);
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
    <div className="flex flex-col justify-center gap-3 py-10 min-h-[70vh]">
      <div className="flex justify-center items-center gap-10">
        <div className="flex-shrink-0 w-1/2">
          <img
            src={product?.images[0]}
            alt={product?.name}
            className="w-full h-auto rounded"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <h1 className="text-4xl mb-4">{product?.name}</h1>
          <p className="text-xl mb-4">{product?.desc}</p>
          <p className="text-xl mb-4">
            Original Price:{" "}
            <span className="line-through text-red-500">
              ${product?.originalPrice}
            </span>
          </p>
          <p className="text-2xl font-bold text-green-500">
            Discounted Price: ${product?.discountedPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
