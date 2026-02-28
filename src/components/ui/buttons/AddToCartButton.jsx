"use client";

import { toast } from "react-toastify";

const { useAddToCartMutation } = require("@/redux/api/cartApi");

const AddToCartButton = ({ qty, className = "", productId }) => {
  const [addToCart] = useAddToCartMutation();

  const handleAddToCart = async () => {
    try {
      await addToCart({ productId, qty }).unwrap();
    } catch (err) {
      if (err?.status === 401) {
        toast.error("Please login first");
      } else {
        console.log(err);
      }
    }
  };
  return (
    <button
      onClick={handleAddToCart}
      className={`bg-[#00B207] text-white py-3 px-4 rounded-full font-medium hover:bg-green-600 ${className}`}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
