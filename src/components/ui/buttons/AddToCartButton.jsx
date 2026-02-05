"use client";
const { useAddToCartMutation } = require("@/redux/api/cartApi");

const AddToCartButton = ({ qty, className = "" ,productId}) => {
  const [addToCart] = useAddToCartMutation();
  return (
    <button
      onClick={async () => {
        await addToCart({ productId, qty });
      }}
      className={`bg-[#00B207] text-white py-3 px-4 rounded-full font-medium hover:bg-green-600 ${className}`}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
