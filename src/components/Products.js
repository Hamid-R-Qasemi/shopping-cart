import React from "react";
import appleImg from "../assets/apple.jpg";
import mangoImg from "../assets/mango.jpg";
import strawberryImg from "../assets/strawberry.jpg";
import pineappleImg from "../assets/pineapple.jpg";
import peachImg from "../assets/peach.jpg";
import grapesImg from "../assets/grapes.jpg";
import Slider from "./Slider";
const DUMMY_PRODUCTS = [
  {
    id: "1",
    name: "Apple",
    price: 5,
    likes: 12,
    img: appleImg,
  },
  {
    id: "2",
    name: "Mango",
    price: 3,
    likes: 22,
    img: mangoImg,
  },
  {
    id: "3",
    name: "Pine Apple",
    price: 15,
    likes: 10,
    img: pineappleImg,
  },
  {
    id: "4",
    name: "Grapes",
    price: 2,
    likes: 35,
    img: grapesImg,
  },
  {
    id: "5",
    name: "Peach",
    price: 5,
    likes: 44,
    img: peachImg,
  },
  {
    id: "6",
    name: "Strawberry",
    price: 6,
    likes: 33,
    img: strawberryImg,
  },
];
function Products() {
  return (
    <>
      <Slider slides={DUMMY_PRODUCTS} />
    </>
  );
}

export default Products;
