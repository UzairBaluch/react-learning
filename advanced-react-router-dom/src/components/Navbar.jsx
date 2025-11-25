import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between text-white bg-cyan-900 ">
      <h2 className="font-bold text-3xl m-5 ">Uzair Baluch</h2>
      <div className="font-bold text-3xl mr-20 flex justify-center items-center gap-10   ">
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/product'}>Product</Link>
       
      </div>
    </div>
  );
};

export default Navbar;
