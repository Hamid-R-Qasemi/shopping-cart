import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useDispatch } from "react-redux";
import { clearCart, submitDiscount } from "../store/cart-slice";
import Card from "../components/Card";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Cart() {
  const inputRef = useRef();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const discountSubmited = useSelector((state) => state.cart.submited);
  const dispatch = useDispatch();
  const [wrong, setWrong] = useState();
  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (
      inputRef.current.value === "discount30" ||
      inputRef.current.value === "discount60"
    ) {
      dispatch(submitDiscount(inputRef.current.value));
    }
  };
  const inputChangeHandler = () => {
    if (
      inputRef.current.value === "discount30" ||
      inputRef.current.value === "discount60"
    ) {
      setWrong("border-green-500 bg-green-100 text-green-500");
    } else {
      setWrong("border-red-500 bg-red-100 text-red-500");
    }
  };
  return (
    <div className="mt-5 h-full">
      <ul className="overflow-y-auto overflow-x-hidden max-h-[400px] p-1 mb-3">
        {cartItems.length > 0 &&
          cartItems.map((item, index) => {
            return <CartItem data={item} key={index} />;
          })}
        {cartItems.length === 0 && (
          <p className="text-xl my-3">
            Your is empty. Try adding items to your cart from home page
          </p>
        )}
      </ul>
      <div>
        <p className="text-md inline-block mr-3">
          Cart Quantity: {totalQuantity}
        </p>
        <p className="text-md inline-block mr-3">
          Cart Total Price: {totalAmount}$
        </p>
        <button
          className="bg-red-500 text-white px-3 py-2 rounded-md"
          onClick={clearCartHandler}
        >
          Clear Cart
        </button>
        {cartItems.length > 0 && !discountSubmited && (
          <form className="mt-3" onSubmit={formSubmitHandler}>
            <label htmlFor="discount" className="mr-1">
              Enter Your Discount Code:
            </label>{" "}
            <input
              ref={inputRef}
              type="text"
              id="discount"
              className={`outline-none px-2 py-1 rounded-md border ${wrong}`}
              onChange={inputChangeHandler}
            />
            <button
              type="submit"
              className="ml-3 bg-green-500 text-white px-3 py-2 rounded-md"
            >
              Submit Discount
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Cart;
