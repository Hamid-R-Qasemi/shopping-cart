import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cart-slice";
import { HiHeart } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";

function Card({ img, price, likes, name, id }) {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const likeCounterHandler = () => {
    setLiked(!liked);
  };
  const addItemToCartHandler = () => {
    dispatch(addItemToCart({ price, name, id, img }));
  };
  return (
    <div className=" bg-white p-4 flex flex-col items-center rounded-md">
      <div className="pb-4 border-b border-b-stone-400">
        <img
          src={img}
          alt={name}
          className="w-[400px] h-[250px] object-cover bg-center rounded-md"
        />
        <p className=" text-center mt-3 text-xl">{name}</p>
      </div>
      <div className="flex flex-row justify-between px-5 py-4 w-full">
        <p className="text-lg">$ {price}</p>

        {liked && (
          <p
            className=" text-lg flex flex-row items-center hover:cursor-pointer"
            onClick={likeCounterHandler}
          >
            {likes + 1} <HiHeart className="inline-block text-red-500" />
          </p>
        )}
        {!liked && (
          <p
            className=" text-lg flex flex-row items-center hover:cursor-pointer"
            onClick={likeCounterHandler}
          >
            {likes} <HiOutlineHeart className="inline-block" />
          </p>
        )}
      </div>
      <button
        className="bg-orange-500 px-5 py-2 hover:bg-orange-600 text-white font-medium rounded-md"
        onClick={addItemToCartHandler}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Card;
