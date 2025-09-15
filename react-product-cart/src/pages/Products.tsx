import React from "react";
import Cart from "../components/Card";
import { products } from "../constant/products";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import CartDrawer from "../components/CartDrawer";
import { useCart } from "../context/CartContext";

const Products: React.FC = () => {
  const [searchProduct, setsearchProduct] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);

  const { cart } = useCart();
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
      <div className="flex justify-self-center items-center mb-6">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-700" />
          <input
            type="text"
            placeholder="Search Product"
            value={searchProduct}
            onChange={(e) => setsearchProduct(e.target.value)}
            className="pl-10 pr-4 py-2 h-10 md:w-3xl w-sm bg-gray-100 rounded-2xl border-2 border-gray-500"
          />
        </div>
        <div className="bg-gray-300 ml-5 items-center justify-items-center rounded-4xl p-3 relative">
          <FiShoppingCart
            className="h-6 w-6 text-gray-700 cursor-pointer hover:text-gray-900"
            onClick={() => setOpenDrawer(true)}
          />
          {cart.length > 0 && (
            <span className="absolute bg-red-600 text-white text-2sm font-bold w-6 h-6 flex items-center justify-center -top-2 -right-1.5 rounded-3xl">
              {cart.length}
            </span>
          )}
          <CartDrawer
            open={openDrawer}
            onClose={() => {
              setOpenDrawer(false);
            }}
          />
        </div>
      </div>
      <div className="mx-14 px-10 grid md:grid-cols-4 gap-6">
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
