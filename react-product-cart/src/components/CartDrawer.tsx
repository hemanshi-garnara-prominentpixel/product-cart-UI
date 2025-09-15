import React from "react";
import { useCart } from "../context/CartContext";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";

const CartDrawer: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  const { cart, increaseQty, decreaseQty, removeFromCart, clearCart } =
    useCart();

  const totalPrice = cart.reduce(
    (sum, item) =>
      sum + item.quantity * (item.price - (item.price * item.discount) / 100),
    0
  );

  const totalDiscount = cart.reduce(
    (sum, item) => sum + (item.quantity * (item.price * item.discount)) / 100,
    0
  );

  const handleCheckout = () => {
    if (
      confirm(
        `Are you sure you want to place an order worth ₹${Math.round(
          totalPrice
        )}?`
      )
    ) {
      toast.success("Order placed successfully!");
      clearCart();
    }
  };
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex justify-end z-50 scrollbar-hidden">
      <div
        className="absolute inset-0 bg-white/75 blur-2xl shadow-2xl border border-black"
        onClick={onClose}
      ></div>

      <div className="relative w-108 h-full bg-gray-50 shadow-2xl p-5 flex flex-col">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-red-600 text-2xl font-bold"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto mt-4 space-y-4">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center">No items in cart</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="bg-gray-200 rounded-lg p-3 flex gap-3 shadow-sm"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-24 h-30 rounded object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm font-semibold text-gray-500 mt-1">
                    {item.brand}
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-2 py-1 bg-gray-400 rounded hover:bg-gray-500"
                    >
                      -
                    </button>
                    <span className="font-bold">{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-2 py-1 bg-gray-400 rounded hover:bg-gray-500"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-2sm mt-2 text-indigo-600 font-semibold">
                    ₹{" "}
                    {Math.round(
                      item.price - (item.price * item.discount) / 100
                    )}{" "}
                    x {item.quantity}
                  </p>
                </div>

                <FiTrash2
                  className="text-red-500 hover:text-red-700 mr-3 w-5 h-6 cursor-pointer mt-0.5"
                  onClick={() => removeFromCart(item.id)}
                />
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t pt-4 mt-4">
            <p className="text-gray-600">
              Total Discount:{" "}
              <span className="ml-50 text-lg font-semibold">
                ₹ {Math.round(totalDiscount)}
              </span>
            </p>
            <p className="text-lg font-bold text-gray-900 mt-1">
              Total Price:
              <span className="ml-50 text-xl text-indigo-600">
                ₹ {Math.round(totalPrice)}
              </span>
            </p>
            <button
              className="w-full mt-3 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
