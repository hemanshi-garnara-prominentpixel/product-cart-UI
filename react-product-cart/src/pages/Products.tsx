import React from "react";
import Cart from "../components/Cart";
import { products } from "../constant/products";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
const Products: React.FC = () => {
  const [searchProduct, setsearchProduct] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchProduct.toLowerCase())
  );
  return (
    <>
      <div className="justify-items-center m-6 mx-20 rounded-2xl bg-gray-800 p-3 shadow-lg sticky top-0 z-10">
        <h1 className="text-4xl font-semibold text-white text-center">
          Products
        </h1>
      </div>
      <div className="flex justify-self-center mb-6">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-700" />
          <input
            type="text"
            placeholder="Search Product"
            value={searchProduct}
            onChange={(e) => setsearchProduct(e.target.value)}
            className="pl-10 pr-4 py-2 h-10 w-3xl bg-gray-100 rounded-2xl border-2 border-gray-500"
          />
        </div>
      </div>
      <div className="mx-14 px-10 grid md:grid-cols-5 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Cart key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">
            No products found
          </p>
        )}
      </div>
    </>
  );
};

export default Products;
