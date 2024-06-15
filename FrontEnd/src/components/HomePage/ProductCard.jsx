import React from "react";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
const ProductCard = ({
  name,
  images,
  discountedPrice,
  originalPrice,
  desc,
  _id,
}) => {
  const navigate = useNavigate();
  return (
    <div className="px-2 py-2 w-94 bg-gray-400 rounded-2xl mt-5 ">
      <img
        onClick={() => {
          navigate(`/product/${_id}`);
        }}
        className="rounded-tr-2xl rounded-tl-2x w-80 h-40"
        src={images[0]}
        alt=""
      />
      <h2>{name}</h2>
      <h2>{desc}</h2>
      <div className="flex gap-2 items-center">
        <h2 className="line-through">{originalPrice} </h2>
        <button className="px-3 py-2 bg-green-300 hover:bg-green-500 rounded-2xl">
          {discountedPrice}
        </button>
      </div>
      <button className="px-3 py-2 text-2xl bg-red-200 hover:bg-red-500 rounded-2xl mt-4">
        Add To Cart
      </button>
      <CiHeart className="ml-4 text-black font-bold hover:bg-red-100 text-3xl mt-4" />
    </div>
  );
};

export default ProductCard;

// import React from "react";

// const ProductCard = () => {
//   return (
//     <div className="relative group">
//       <div className="px-2 py-2 w-80 bg-gray-400 rounded-2xl group-hover:overflow-visible">
//         <img
//           className="rounded-tr-2xl rounded-tl-2xl"
//           src="https://images.pexels.com/photos/15672781/pexels-photo-15672781/free-photo-of-cloud-over-mountain-peak-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
//           alt=""
//         />
//         <h2>Mountain</h2>
//         <h2>This is a mountain</h2>
//         <div className="flex gap-2 items-center">
//           <h2 className="line-through">Original </h2>
//           <button className="px-3 py-2 bg-green-300 rounded-2xl hidden group-hover:block">
//             Discounted
//           </button>
//         </div>
//         <button className="px-3 py-2 text-2xl bg-red-200 rounded-2xl mt-4 hidden group-hover:block">
//           Add To Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
