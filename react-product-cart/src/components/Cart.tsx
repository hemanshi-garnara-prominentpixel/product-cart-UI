import React from "react";
import type { CartProps } from "../common/types";
import { useNavigate } from "react-router-dom";

const Cart: React.FC<CartProps> = ({ product }) => {
  const navigate = useNavigate();

  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <>
      <div
        className="max-w-xs overflow-hidden rounded-3xl relative"
        onClick={() => navigate(`/products/${product.id}`)}
      >
        <div>
          <img
            className="object-fit-cover h-44 w-full"
            src={product.imageUrl}
            alt={product.name}
          />
          {product.discount > 0 && (
            <span className="absolute top-4 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {product.discount}% OFF
            </span>
          )}
        </div>

        <div className="bg-gray-100 p-3">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {product.name}
          </h3>
          <h4 className="text-gray-600 text-md mt-1 font-bold">
            {product.brand}
          </h4>
          <p className="text-gray-500 text-sm mt-1 line-clamp-1">
            {product.shortDescription}
          </p>

          <div className="flex items-center gap-2 mt-1">
            <h4 className="text-xl font-bold text-indigo-600">
              ₹ {discountedPrice}
            </h4>
            {product.discount > 0 && (
              <span className="line-through text-gray-500 text-sm">
                ₹ {product.price}
              </span>
            )}
          </div>

          <p
            className={`${
              product.stockStatus === "In Stock"
                ? "text-green-600"
                : "text-red-600"
            } text-sm font-semibold mt-2`}
          >
            {product.stockStatus}
          </p>

          <div className="flex items-center justify-between mt-3 mb-1">
            <button
              className="px-3 py-1 bg-gray-800 text-white text-2sm rounded-lg hover:bg-gray-900 transition w-full"
              onClick={(e) => {
                e.stopPropagation(); 
                // onAddToCart?.(product.id); // Uncomment if needed
              }}
              disabled={product.stockStatus !== "In Stock"}
            >
              {product.stockStatus === "In Stock"
                ? "Add to Cart"
                : "Out of Stock"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
