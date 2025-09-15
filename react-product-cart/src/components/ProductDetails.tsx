import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../constant/products";
import { useCart } from "../context/CartContext";
import CartDrawer from "./CartDrawer";
import { useState } from "react";
import { toast } from "react-toastify";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));
  const navigate = useNavigate();
  const { cart, addToCart } = useCart();

  const cartItem = cart.find((item) => item.id === product.id);
  const [openDrawer, setOpenDrawer] = useState(false);
  if (!product) {
    return (
      <h2 className="text-4xl text-center m-10 text-red-600">
        Product not found
      </h2>
    );
  }
  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center p-5">
      <div className="bg-white shadow-xl w-full max-w-6xl grid md:grid-cols-2 gap-8 p-6 px-7 rounded-3xl ">
        <div className="flex items-center justify-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="rounded-3xl w-500 h-144 object-fill"
          />
        </div>

        <div className="space-y-2 p-2">
          <div className="flex relative">
            <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
            <div className="hover:cursor-pointer">
              <h3
                className="absolute right-1 text-xl text-indigo-600 cursor-pointer"
                onClick={() => {
                  navigate("/products");
                }}
              >
                Back
              </h3>
            </div>
          </div>
          <h3 className="text-2xl text-gray-500 font-bold">{product.brand}</h3>

          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-indigo-600">
              ₹{" "}
              {Math.round(
                product.price - (product.price * product.discount) / 100
              )}
            </span>
            {product.discount > 0 && (
              <span className="line-through text-lg  text-gray-500">
                ₹ {product.price}
              </span>
            )}
            {product.discount > 0 && (
              <span className="bg-red-500 text-white px-2 py-1 rounded text-xl font-bold">
                {product.discount}% OFF
              </span>
            )}
          </div>

          <p
            className={`font-semibold text-lg ${
              product.stockStatus === "In Stock"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {product.stockStatus}
          </p>
          <hr className="bg-gray-200" />

          <p className="text-gray-700 ">
            <strong>Short Description: </strong>
            <br />
            {product.shortDescription}
          </p>
          <p className="text-gray-700">
            <strong>Full Description: </strong>
            <br />
            {product.fullDescription}
          </p>
          <div className="items-center">
            <p className="text-gray-700 mb-2">
              <strong>Other Info:</strong>
            </p>

            <div className="bg-gray-200 p-4 rounded-lg grid md:grid-cols-2 gap-5">
              <p>
                <strong>Category: </strong> <br />
                {product.category}
              </p>
              <p>
                <strong>Delivery Options: </strong> <br />{" "}
                {product.deliveryOptions.join(", ")}
              </p>
              <p>
                <strong>Warranty: </strong> <br />
                {product.warranty}
              </p>
              <p>
                <strong>Return Policy: </strong>
                <br />
                {product.returnPolicy}
              </p>
            </div>
          </div>
          <button
            className={`mt-2 w-full text-white py-3 rounded-lg transition
              ${
                product.stockStatus !== "In Stock"
                  ? "bg-gray-400  cursor-not-allowed"
                  : "bg-gray-800  hover:bg-gray-900"
              }`}
            disabled={product.stockStatus !== "In Stock"}
            onClick={() => {
              if (product.stockStatus === "In Stock") {
                addToCart(product);
                if (cartItem) {
                  toast.info(`Item quantity is now ${cartItem.quantity + 1}`);
                } else {
                  toast.success("Added to cart");
                }
                setOpenDrawer(true);
              }
            }}
          >
            {product.stockStatus !== "In Stock"
              ? "Out of Stock"
              : "Add to Cart"}
          </button>
          <CartDrawer
            open={openDrawer}
            onClose={() => {
              setOpenDrawer(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
