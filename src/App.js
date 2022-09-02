import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20 bg-stone-100 h-screen px-5 sm:px-10 md:px-30 lg:px-40 overflow-hidden">
        <Routes>
          <Route element={<p>404 Not Found</p>} path="*" />
          <Route element={<Main />} path="/" />
          <Route element={<Cart />} path="/cart" />
        </Routes>
      </div>
    </>
  );
}

export default App;
