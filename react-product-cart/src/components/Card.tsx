import React from "react";
import type { CartProps } from "../common/types";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const Card: React.FC<CartProps> = ({ product }) => {
  const navigate = useNavigate();

  const discountedPrice =
    product.price - (product.price * product.discount) / 100;
  const { cart, addToCart } = useCart();

  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <>
      <div
        className="max-w-xs overflow-hidden rounded-3xl relative hover:cursor-pointer"
        onClick={() => navigate(`/products/${product.id}`)}
      >
        <div className="hover:cursor-pointer">
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
              className={`px-3 py-1 text-white text-2sm rounded-lg transition w-full
                ${
                  product.stockStatus !== "In Stock"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gray-800 hover:bg-gray-900"
                }`}
              onClick={(e) => {
                e.stopPropagation();
                if (product.stockStatus === "In Stock") {
                  addToCart(product);

                  if (cartItem) {
                    toast.info(
                      `Item quantity updated to ${cartItem.quantity + 1}`
                    );
                  } else {
                    toast.success("Item added to cart");
                  }
                } else {
                  toast.error("This product is out of stock");
                }
              }}
              disabled={product.stockStatus !== "In Stock"}
            >
              {product.stockStatus !== "In Stock"
                ? "Out of Stock"
                : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
