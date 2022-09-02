import React from "react";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <nav className="fixed top-0 right-0 w-full bg-white py-6 px-5 sm:px-10 md:px-30 lg:px-40 flex justify-between text-lg items-center">
      <p className=" not-ptalic">Navbar</p>
      <div className="flex flex-row">
        <Link to="/" className=" not-italic w-max relative flex items-center">
          <p className="mr-4">Products</p>
        </Link>
        <Link
          to="/cart"
          className=" not-italic w-max relative flex items-center"
        >
          <BsBag className="h-6 w-6" />
          <p className="absolute bg-red-500 w-4 h-4 rounded-full text-white text-[10px] -right-1 -bottom-1 flex items-center justify-center hover:cursor-pointer">
            {totalQuantity}
          </p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
