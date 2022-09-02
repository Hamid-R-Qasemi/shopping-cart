import React from "react";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  deleteItemFromCart,
} from "../store/cart-slice";
import { ImCross, ImPlus, ImMinus } from "react-icons/im";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

function CartItem({ data }) {
  const [show, setShow] = useState(true);
  const [add, setAdd] = useState(false);
  const [remove, setRemove] = useState(false);
  const dispatch = useDispatch();
  const addItemHandler = () => {
    setAdd(true);
    setTimeout(() => {
      setAdd(false);
    }, 90);

    dispatch(
      addItemToCart({
        price: data.price,
        name: data.name,
        id: data.itemId,
        img: data.img,
      })
    );
  };
  const removeItemHandler = () => {
    setRemove(true);
    setTimeout(() => {
      setRemove(false);
    }, 90);
    dispatch(removeItemFromCart({ id: data.itemId }));
  };
  const deleteItemHandler = () => {
    setShow(false);
    setTimeout(() => {
      setShow(true);
      dispatch(deleteItemFromCart({ id: data.itemId }));
    }, 300);
  };
  console.log(add);
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={show}
      classNames={{
        enter: "translate-x-0 duration-[0ms]",
        enterActive: "translate-x-0 duration-[0ms]",
        exit: "translate-x-0 transition-all duration-300",
        exitActive: "translate-x-[100%] transition-all duration-300",
      }}
      timeout={300}
    >
      <li
        className={`flex flex-col md:flex-row bg-white rounded-md p-5 h-[400px] md:h-[200px] mb-3 justify-center items-center transition-all duration-300 ${
          add ? "scale-[102%] " : ""
        } ${remove ? "scale-[95%]" : ""}`}
      >
        <img
          src={data.img}
          alt=""
          className="bg-gray-100 h-1/2 md:h-full w-[400px] object-cover mr-2 rounded-md"
        />
        <div className="ml-2 md:border-l md:border-stone-300 md:pl-4 grid grid-cols-3 md:grid-cols-4 w-full h-full text-lg justify-items-center items-center">
          <p>{data.name}</p>
          <p>{data.price}$</p>
          <p>Quantity({data.quantity})</p>
          <div className="flex flex-row col-span-3 md:col-span-1 items-center">
            <button
              className="px-3 py-3 bg-sky-500 text-white rounded-md mx-1 text-base"
              onClick={addItemHandler}
            >
              <ImPlus />
            </button>
            <button
              className="px-3 py-3 bg-sky-500 text-white rounded-md mx-1 text-base"
              onClick={removeItemHandler}
            >
              <ImMinus />
            </button>
            <button
              className="px-3 py-3 bg-red-500 text-white rounded-md mx-1 text-base"
              onClick={deleteItemHandler}
            >
              <ImCross />
            </button>
          </div>
        </div>
      </li>
    </CSSTransition>
  );
}

export default CartItem;
