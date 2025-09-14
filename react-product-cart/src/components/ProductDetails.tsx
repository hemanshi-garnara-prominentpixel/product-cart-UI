import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../constant/products";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const navigate = useNavigate();
  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center p-5">
      <div className="bg-white shadow-xl w-full max-w-7xl grid md:grid-cols-2 gap-8 p-6 rounded-2xl ">
        <div className="flex items-center justify-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="rounded-2xl w-500 h-152 object-fill"
          />
        </div>

        <div className="space-y-3 p-2">
          <div className="flex relative">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <div className="">
              <h3
                className="absolute right-1 text-xl text-indigo-600 "
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
            <span className="text-3xl font-bold text-indigo-600">
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
            className="mt-2 w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition"
            disabled={product.stockStatus !== "In Stock"}
          >
            {product.stockStatus === "In Stock"
              ? "Add to Cart"
              : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
