import React from "react";
import ProductRoutes from "./Routes/ProductRoutes";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  return (
    <>
      <CartProvider>
        <ProductRoutes />
        <ToastContainer
        position="top-right"
        autoClose={2000} // auto hide after 2s
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
      </CartProvider>
    </>
  );
};

export default App;
